import OSS from "ali-oss";
import { Stream } from "stream";

export const client = new OSS({
  region: process.env.aliOssRegion as string,
  accessKeyId: process.env.aliOssAccessKeyId as string,
  accessKeySecret: process.env.aliOssAccessKeySecret as string,
  bucket: process.env.aliOssBucket as string,
});

export const generateObjectPath = (bundleName: string, bundleVersion: string) => {
  return `jsBundle/${bundleName}/${bundleVersion}.zip`;
};

// put bundle object
export async function putBundle(
  bundleName: string,
  bundleVersion: string,
  stream: Stream
) {
  const ossPath = generateObjectPath(bundleName, bundleVersion);
  const putRes = await client.putStream(ossPath, stream);
  return {
    ...putRes.res,
    url: client.generateObjectUrl(ossPath),
    name: putRes.name,
  };
}
// get object url
export function getBundleUrl(bundleName: string, bundleVersion: string) {
  const ossPath = generateObjectPath(bundleName, bundleVersion);
  return client.generateObjectUrl(ossPath);
}
// get object stream
export function pullBundle(bundleName: string, bundleVersion: string) {
  const ossPath = generateObjectPath(bundleName, bundleVersion);
  return client.getStream(ossPath);
}

// get object stream
export function deleteBundle(bundleName: string, bundleVersion: string) {
  const ossPath = generateObjectPath(bundleName, bundleVersion);
  return client.delete(ossPath);
}
