import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class Bundle {
  @PrimaryGeneratedColumn({})
  id: number;
  @Column({
    type: "text",
  })
  name: string;
  @Column({
    type: "text",
  })
  version: string;
  @Column({
    type: "integer",
  })
  versionNumber: number;
  @Column({
    type: "text",
  })
  buildTime: string;
  @Column({
    type: "text",
  })
  publishTime: string;
  @Column({
    type: "text",
  })
  ossUrl: string;
  @Column({
    type: "integer",
  })
  pullCount: number;
  @Column({
    type: "numeric",
  })
  bundleSize: number;
  @Column({
    type: "text",
  })
  description: string;
}
