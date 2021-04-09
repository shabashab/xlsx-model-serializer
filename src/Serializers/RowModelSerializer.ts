import IRowModelSerializer from "./Interfaces/IRowModelSerializer";
import { RowModel } from "@xlsx-model/models";
import ICellModelSerializer from "./Interfaces/ICellModelSerializer";
import ObjectDictionary from "../Types/ObjectDictionary";

export default class RowModelSerializer implements IRowModelSerializer {
  private _cellSerializer: ICellModelSerializer;

  constructor(cellSerializer: ICellModelSerializer) {
    this._cellSerializer = cellSerializer;
  }

  serialize(rowModel: RowModel): object {
    let result = {
      cells: {} as ObjectDictionary,
    };

    rowModel.cells.forEach((key, value) => {
      result.cells[key.toString()] = this._cellSerializer.serialize(value);
    });

    return result;
  }
}
