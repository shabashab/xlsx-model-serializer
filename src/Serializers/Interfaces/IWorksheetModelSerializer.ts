import ISerializer from "./ISerializer";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetModelSerializer
  extends ISerializer<WorksheetModel> {}
