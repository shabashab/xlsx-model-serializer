import ISerializer from "./ISerializer";
import { WorkbookModel } from "@xlsx-model/models";

export default interface IWorkbookModelSerializer
  extends ISerializer<WorkbookModel> {}
