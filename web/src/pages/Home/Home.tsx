import React, { FC, useState } from "react";
import { Button, Input, Space, Table, message } from "antd";
import { useBundleList } from "./useBundleList";
import copy from "copy-to-clipboard";

interface IProps {}

const BundleList: FC<IProps> = (props) => {
  const { dataSource, columns, page, total, setPage, onSearch, onDelete } =
    useBundleList([
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
        render: (row) => {
          return (
            <Space wrap>
              <a onClick={() => handleDownload(row.ossUrl)}>下载</a>
              <a onClick={() => onDelete(row)}>删除</a>
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

  return (
    <div
      style={{
        padding: 15,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <div>
          <Input placeholder="bundleName"></Input>
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
        dataSource={dataSource}
        columns={columns}
        size="small"
      ></Table>
    </div>
  );
};

export default BundleList;
