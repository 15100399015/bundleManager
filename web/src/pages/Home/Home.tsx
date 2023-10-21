import React, { FC, useState } from "react";
import {
  Button,
  Descriptions,
  DescriptionsProps,
  Input,
  Space,
  Table,
  message,
} from "antd";
import { useBundleList } from "./useBundleList";
import copy from "copy-to-clipboard";
import { Modal } from "antd";
import Apis from "@/apis";

interface IProps {}

const BundleList: FC<IProps> = (props) => {
  const {
    dataSource,
    columns,
    page,
    total,
    loading,
    setPage,
    onSearch,
    onChangeSearchValue,
    onDelete,
    searchValue,
  } = useBundleList([
    {
      title: "name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "version",
      dataIndex: "version",
      key: "id",
    },
    {
      title: "buildTime",
      dataIndex: "buildTime",
      key: "id",
    },
    {
      title: "publishTime",
      dataIndex: "publishTime",
      key: "id",
    },

    {
      title: "pullCount",
      dataIndex: "pullCount",
      key: "id",
    },
    {
      title: "bundleSize",
      dataIndex: "bundleSize",
      key: "id",
      render(value, record, index) {
        return value + "mb";
      },
    },
    {
      title: "ossUrl",
      dataIndex: "ossUrl",
      key: "id",
      render(value, record, index) {
        return <a onClick={() => handleCopy(value)}>复制</a>;
      },
    },
    {
      title: "description",
      dataIndex: "description",
      key: "id",
    },
    {
      title: "action",
      key: "id",
      render: (value, record, index) => {
        return (
          <Space wrap>
            <a onClick={() => handleDownload(record.ossUrl)}>下载</a>
            <a onClick={() => onDelete(record.id)}>删除</a>
            <a onClick={() => onCheckLastVersion(record.name)}>查看最新版本</a>
          </Space>
        );
      },
    },
  ]);

  const handleDownload = (ossUrl: string) => {
    window.open(ossUrl);
  };
  const handleCopy = (value: string) => {
    copy(value, {});
    message.success("以复制");
  };
  const onCheckLastVersion = async (name: string) => {
    const modal = Modal.info({
      title: "最新版本信息",
      content: "加载中",
      width: 800,
      onOk() {},
    });
    const data = await Apis.bundle.checkLastVersion(name);
    if (data.ok && data.data) {
      modal.update({
        content: (
          <div>
            <Descriptions column={1} title={name}>
              {Object.entries(data.data).map(([key, value], index) => {
                return (
                  <Descriptions.Item key={index} label={key}>
                    {value as string}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div>
        ),
      });
    } else {
      modal.update({ content: "请求出错" });
    }
  };

  return (
    <div style={{ padding: 15 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <div>
          <Input
            placeholder="bundleName"
            value={searchValue}
            onChange={(e) => {
              onChangeSearchValue(e.target.value);
            }}
          ></Input>
        </div>
        <div>
          <Space wrap>
            <Button type="primary" onClick={onSearch}>
              搜索
            </Button>
          </Space>
        </div>
      </div>
      <Table
        pagination={{
          current: page.current,
          pageSize: page.size,
          total: total,
          onChange(page, pageSize) {
            setPage({ size: pageSize, current: page });
          },
        }}
        rowKey={"id"}
        bordered
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        size="small"
      ></Table>
    </div>
  );
};

export default BundleList;
