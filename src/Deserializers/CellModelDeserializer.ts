import ICellModelDeserializer from "./Interfaces/ICellModelDeserializer";
import { CellModel } from "@xlsx-model/models";
import ICellStyleDeserializer from "./Interfaces/ICellStyleDeserializer";

export default class CellModelDeserializer implements ICellModelDeserializer {
  private _styleDeserializer: ICellStyleDeserializer;

  constructor(cellStyleDeserializer: ICellStyleDeserializer) {
    this._styleDeserializer = cellStyleDeserializer;
  }

  deserialize(objectToDeserialize: any): CellModel {
    let cellModel = new CellModel();

    cellModel.value = objectToDeserialize.value;
    cellModel.rowSpan = objectToDeserialize.rowSpan;
    cellModel.columnSpan = objectToDeserialize.columnSpan;
    cellModel.style = this._styleDeserializer.deserialize(
      objectToDeserialize.style,
    );

    return cellModel;
  }
}
