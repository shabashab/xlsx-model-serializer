import IDeserializer from "./IDeserializer";
import { WorkbookModel } from "@xlsx-model/models";

export default interface IWorkbookModelDeserializer
  extends IDeserializer<WorkbookModel> {}
