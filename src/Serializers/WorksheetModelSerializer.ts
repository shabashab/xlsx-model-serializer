import { WorksheetModel } from "@xlsx-model/models";
import IWorksheetModelSerializer from "./Interfaces/IWorksheetModelSerializer";
import ITableMarkupSerializer from "./Interfaces/ITableMarkupSerializer";
import IRowModelSerializer from "./Interfaces/IRowModelSerializer";
import ObjectDictionary from "../Types/ObjectDictionary";

export default class WorksheetModelSerializer
  implements IWorksheetModelSerializer {
  private _markupSerializer: ITableMarkupSerializer;
  private _rowSerializer: IRowModelSerializer;

  constructor(
    markupSerializer: ITableMarkupSerializer,
    rowSerializer: IRowModelSerializer,
  ) {
    this._markupSerializer = markupSerializer;
    this._rowSerializer = rowSerializer;
  }

  serialize(worksheetModel: WorksheetModel): object {
    let result = {
      name: worksheetModel.name,
      rows: {} as ObjectDictionary,
      tableMarkup: {} as object,
    };

    result.tableMarkup = this._markupSerializer.serialize(
      worksheetModel.tableMarkup,
    );

    worksheetModel.rows.forEach((key, value) => {
      result.rows[key.toString()] = this._rowSerializer.serialize(value);
    });

    return result;
  }
}
