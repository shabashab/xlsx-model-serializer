import IDeserializer from "./IDeserializer";
import { CellModel } from "@xlsx-model/models";

export default interface ICellModelDeserializer
  extends IDeserializer<CellModel> {}
