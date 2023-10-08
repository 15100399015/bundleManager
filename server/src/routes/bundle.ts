import { Router } from "express";
import { getBundleTable } from "../service/database";
import { ILike } from "typeorm";
import { deleteBundle } from "../service/aliOss";

export const router = Router();

class Result {
  static standard(code: number, data: any, message: string) {
    return { code, message, data };
  }
  static data(data: any, message?: string) {
    return Result.standard(0, data, message || "success");
  }
  static warning(data: any, message?: string) {
    return Result.standard(1, data, message || "warning");
  }
  static error(data: any, message?: string) {
    return Result.standard(2, data, message || "error");
  }
}

router.get("/list", async (req, res, next) => {
  const name = req.query.name as string;
  const pageSize = Number(req.query.pageSize) || 10;
  const pageNumber = Number(req.query.pageNumber) || 1;

  const bundleTable = getBundleTable();
  const pageRes = await bundleTable.findAndCount({
    where: {
      name: ILike(`%${name}%`),
    },
    skip: pageNumber * pageSize - pageSize,
    take: pageSize,
    order: {
      version: "DESC",
    },
  });
  const list = pageRes[0];
  const total = pageRes[1];

  res.json(Result.data({ list, total }));
});

router.delete("/delete", async (req, res, next) => {
  const id = Number(req.body.id) as number;

  const bundleTable = getBundleTable();
  const bundle = await bundleTable.findOneBy({ id });

  if (bundle) {
    await bundleTable.delete(bundle.id);
    await deleteBundle(bundle.name, bundle.version);
    return res.json(Result.data({}));
  } else {
    return res.json(Result.warning({}));
  }
});

// 检查最新版本
router.post("/checkLastVersion", async (req, res, next) => {
  const bundleName = String(req.body.busndleName) as string;

  const bundleTable = getBundleTable();
  const bundle = await bundleTable.findOne({
    where: { name: bundleName },
    order: { versionNumber: "DESC" },
  });
  if (bundle) {
    return res.json(Result.data(bundle));
  } else {
    return res.json(Result.error({}));
  }
});
