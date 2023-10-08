import { Router } from "express";
import { getBundleTable } from "../service/database";
import { putBundle } from "../service/aliOss";
import { Bundle } from "../database/entity/bundle";
import { getCurrentTime } from "../utils";
import { MoreThanOrEqual } from "typeorm";
export const router = Router();
import type { Application } from "express";
import { Readable, Writable } from "stream";

type bundleMetaDataType = {
  bundleName: string;
  bundleVersion: string;
  bundleDesc: string;
  bundleBuildTime: string;
};

// 发布接口
router.post("/push", async (req, res) => {
  const bundleMetaData: bundleMetaDataType = await parseToObject(
    req.header("bundleMetaData")
  );

  const { bundleName, bundleVersion, bundleDesc, bundleBuildTime } =
    bundleMetaData;
  const bundleVersionNumber = Number(bundleVersion.replace(/\./g, ""));
  let bundleSize = 0;
  req.addListener("data", (data) => (bundleSize += data.length));

  const bundleTable = getBundleTable();
  const bundleInfo = await bundleTable.findOne({
    where: {
      name: bundleName,
      versionNumber: MoreThanOrEqual(bundleVersionNumber),
    },
    order: { versionNumber: "DESC" },
  });
  // 重复bundle
  if (bundleInfo) {
    res.writeHead(500, { "Content-Type": "application/json;charset=utf-8" });
    return res.end(
      JSON.stringify({
        message: `version error: lastVersion >= currentVersion - ${bundleInfo.version} >= ${bundleVersion}`,
      })
    );
  }

  // 上传文件
  const ossRes = await putBundle(bundleName, bundleVersion, req);

  // 存储数据库
  const bundle = new Bundle();
  bundle.name = bundleName;
  bundle.version = bundleVersion;
  bundle.versionNumber = bundleVersionNumber;
  bundle.buildTime = bundleBuildTime;
  bundle.publishTime = getCurrentTime();
  bundle.ossUrl = ossRes.url;
  bundle.pullCount = 0;
  bundle.bundleSize = Number((bundleSize / Math.pow(1024, 2)).toFixed(2));
  bundle.description = bundleDesc;
  await bundleTable.save(bundle);
  // 响应
  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  return res.end(JSON.stringify({ bundle }));
});

function parseToObject(text?: string): any {
  if (!text) return Promise.reject();
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(decodeURIComponent(text)));
    } catch (error) {
      reject(error);
    }
  });
}
