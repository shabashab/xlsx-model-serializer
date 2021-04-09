import IValidatorProvider from "./IValidatorProvider";
import { Schema, Validator } from "jsonschema";
import FileSchemaProvider from "./FileSchemaProvider";
import appRoot from "app-root-path";
import { readdirSync } from "fs";

export default class FileValidatorProvider implements IValidatorProvider {
  private static getSchemaFilesArray(): string[] {
    let schemaFileNames = readdirSync(appRoot.resolve("schema"));
    schemaFileNames = schemaFileNames.map((value) => {
      return appRoot.resolve(`schema/${value}`);
    });
    return schemaFileNames;
  }

  private static getSchemasArray(
    fileSchemaProvider: FileSchemaProvider,
  ): Schema[] {
    let files = FileValidatorProvider.getSchemaFilesArray();
    let schemas: Schema[] = [];
    files.forEach((value) => {
      fileSchemaProvider.fileName = value;
      schemas.push(fileSchemaProvider.getSchema());
    });
    return schemas;
  }

  getValidator(): Validator {
    let validator = new Validator();

    let schemaProvider = new FileSchemaProvider();
    let schemas = FileValidatorProvider.getSchemasArray(schemaProvider);

    schemas.forEach((schema) => {
      validator.addSchema(schema);
    });

    return validator;
  }
}
