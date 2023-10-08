import { DataSource, Repository } from "typeorm";
import { Bundle } from "../database/entity/bundle";
import path from "path";

const dbFile = path.join(__dirname, "../database/database.db");

export const dataSource = new DataSource({
  type: "sqlite",
  database: dbFile,
  entities: [Bundle],
  synchronize: true,
});

dataSource.initialize();

let bundleTable: Repository<Bundle> | null = null;
export const getBundleTable = () => {
  if (!bundleTable) bundleTable = dataSource.getRepository(Bundle);
  return bundleTable;
};
