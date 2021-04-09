import ICellModelSerializer from "./Interfaces/ICellModelSerializer";
import { CellModel } from "@xlsx-model/models";
import ICellStyleSerializer from "./Interfaces/ICellStyleSerializer";

export default class CellModelSerializer implements ICellModelSerializer {
  private _cellStyleSerializer: ICellStyleSerializer;

  constructor(cellStyleSerializer: ICellStyleSerializer) {
    this._cellStyleSerializer = cellStyleSerializer;
  }

  serialize(cellModel: CellModel): object {
    let result = {
      rowSpan: cellModel.rowSpan,
      columnSpan: cellModel.columnSpan,
      value: cellModel.value,
      style: {} as object,
    };

    result.style = this._cellStyleSerializer.serialize(cellModel.style);

    return result;
  }
}
