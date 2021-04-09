import IWorksheetModelDeserializer from "./Interfaces/IWorksheetModelDeserializer";
import IRowModelDeserializer from "./Interfaces/IRowModelDeserializer";
import ITableMarkupDeserializer from "./Interfaces/ITableMarkupDeserializer";
import { WorksheetModel } from "@xlsx-model/models";

export default class WorksheetModelDeserializer
  implements IWorksheetModelDeserializer {
  private _rowDeserializer: IRowModelDeserializer;
  private _markupDeserializer: ITableMarkupDeserializer;

  constructor(
    rowModelDeserializer: IRowModelDeserializer,
    tableMarkupDeserializer: ITableMarkupDeserializer,
  ) {
    this._rowDeserializer = rowModelDeserializer;
    this._markupDeserializer = tableMarkupDeserializer;
  }

  deserialize(objectToDeserialize: any): WorksheetModel {
    let worksheetModel = new WorksheetModel();

    worksheetModel.name = objectToDeserialize.name;
    worksheetModel.tableMarkup = this._markupDeserializer.deserialize(
      objectToDeserialize.tableMarkup,
    );

    Object.entries(objectToDeserialize.rows).forEach(([entry, value]) => {
      if (!entry) return;
      worksheetModel.rows.setValue(
        parseInt(entry),
        this._rowDeserializer.deserialize(value as any),
      );
    });

    return worksheetModel;
  }
}
