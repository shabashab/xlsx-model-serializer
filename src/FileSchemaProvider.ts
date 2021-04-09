import ISchemaProvider from "./ISchemaProvider";
import { readFileSync } from "fs";
import { Schema } from "jsonschema";

export default class FileSchemaProvider implements ISchemaProvider {
  public fileName: string;

  constructor(fileName?: string) {
    this.fileName = fileName || "";
  }

  getSchema(): Schema {
    let fileContents = readFileSync(this.fileName).toString();
    let jsonObject = JSON.parse(fileContents);
    return <Schema>jsonObject;
  }
}
