import fs from "fs";
import archiver from "archiver";

/**
 * 清空文件夹
 * @param {String} path
 * @returns {void}
 */
export function emptyDirSync(path: string) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);
    for (const file of files) {
      const curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        emptyDirSync(curPath); //递归清空文件夹
        fs.rmdirSync(curPath);
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    }
  }
}

/**
 * 创建文件夹
 * @param {*} path
 * @returns
 */
export function mkdir(path: string) {
  if (fs.existsSync(path)) {
    return path;
  } else {
    fs.mkdirSync(path, { recursive: true });
    return path;
  }
}
/**
 * 创建压缩文件
 * @param {*} path
 * @returns
 */
export function createZip(path: string) {
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });
  archive.directory(path, false);
  archive.finalize();
  return archive;
}

/**
 * 获取当前时间
 * @returns
 */
export function getCurrentTime() {
  const date = new Date();
  return [
    date.getUTCFullYear() + ".",
    date.getUTCMonth() + 1 + ".",
    date.getUTCDay() + 1 + "-",
    date.getHours() + ":",
    date.getUTCMinutes() + ":",
    date.getUTCSeconds(),
  ].join("");
}
