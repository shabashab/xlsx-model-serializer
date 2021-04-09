import IRowModelDeserializer from "./Interfaces/IRowModelDeserializer";
import { RowModel } from "@xlsx-model/models";
import ICellModelDeserializer from "./Interfaces/ICellModelDeserializer";

export default class RowModelDeserializer implements IRowModelDeserializer {
  private _cellDeserializer: ICellModelDeserializer;

  constructor(cellModelDeserializer: ICellModelDeserializer) {
    this._cellDeserializer = cellModelDeserializer;
  }

  deserialize(objectToDeserialize: any): RowModel {
    let rowModel = new RowModel();

    Object.entries(objectToDeserialize.cells).forEach(([key, value]) => {
      rowModel.cells.setValue(
        parseInt(key),
        this._cellDeserializer.deserialize(value),
      );
    });

    return rowModel;
  }
}
