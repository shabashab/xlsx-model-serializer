import IDeserializer from "./IDeserializer";
import { RowModel } from "@xlsx-model/models";

export default interface IRowModelDeserializer
  extends IDeserializer<RowModel> {}
