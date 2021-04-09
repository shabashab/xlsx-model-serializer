import { Schema } from "jsonschema";

export default interface ISchemaProvider {
  getSchema(): Schema;
}
