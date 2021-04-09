import IDeserializer from "./IDeserializer";
import { CellStyle } from "@xlsx-model/models";

export default interface ICellStyleDeserializer
  extends IDeserializer<CellStyle> {}
