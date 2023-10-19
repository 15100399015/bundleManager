import { Router } from "express";
import { getBundleTable } from "../service/database";
import { ILike } from "typeorm";
import { deleteBundle, pullBundle } from "../service/aliOss";
import { Result } from "../utils/response";

export const router = Router();


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
  const name = String(req.body.name) as string;

  const bundleTable = getBundleTable();
  const bundle = await bundleTable.findOne({
    where: { name },
    order: { versionNumber: "DESC" },
  });
  if (bundle) {
    return res.json(Result.data(bundle));
  } else {
    return res.json(Result.error({}));
  }
});

// 检查最新版本
router.get("/pullLastBundle", async (req, res, next) => {
  const name = String(req.body.name) as string

  const bundleTable = getBundleTable();
  const bundle = await bundleTable.findOne({
    where: { name },
    order: { versionNumber: "DESC" },
  });
  if(bundle){
    const ossStrame = await pullBundle(bundle.name, bundle.version);
    res.setHeader("Content-Type", "application/octet-stream")
    res.setHeader("Content-Disposition", `attachment;filename=${bundle.name}.zip`)
    ossStrame.stream.pipe(res);
  }else{
    res.writeHead(404).end("bundle not find");
  }
});
