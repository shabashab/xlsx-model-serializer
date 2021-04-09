import IDeserializer from "./IDeserializer";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetModelDeserializer
  extends IDeserializer<WorksheetModel> {}
