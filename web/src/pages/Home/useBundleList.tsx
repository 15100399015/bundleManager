import { ColumnType } from "antd/lib/table";
import { useEffect, useState } from "react";
import Apis from "@/apis/index";
import { BundleEntity } from "@/types/dataEntity";
import { message } from "antd";

export const useBundleList = function (columns: ColumnType<BundleEntity>[]) {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState<{
    size: number;
    current: number;
  }>({
    size: 10,
    current: 1,
  });
  const [total, setTotal] = useState(0);

  const [dataSource, setDataSource] = useState<any[]>([]);

  const onPageChange = (newPage: { size: number; current: number }) => {
    setPage(Object.assign(page, newPage));
  };

  const reFetch = async () => {
    const res = await Apis.bundle.list({
      pageNumber: page.current,
      pageSize: page.size,
      name: searchValue,
    });
    if (res.ok && res.data) {
      setDataSource(res.data?.list);
      setTotal(res.data.total);
    }
  };
  const onSearch = () => {
    reFetch();
  };
  const onDelete = async (row: any) => {
    const res = await Apis.bundle.delete(row.id);
    if (res.ok) {
      message.success("删除成功");
      reFetch();
    }
  };
  useEffect(() => {
    reFetch();
  }, [page.size, page.current]);

  return {
    dataSource: dataSource,
    columns: columns,
    searchValue: searchValue,
    onChangeSearchValue: setSearchValue,
    page: page,
    total: total,
    setPage: onPageChange,
    onSearch,
    onDelete,
  };
};
