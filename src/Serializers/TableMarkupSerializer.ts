import ITableMarkupSerializer from "./Interfaces/ITableMarkupSerializer";
import { TableMarkup } from "@xlsx-model/models";
import ObjectDictionary from "../Types/ObjectDictionary";
import IRowMarkupSerializer from "./Interfaces/IRowMarkupSerializer";
import IColumnMarkupSerializer from "./Interfaces/IColumnMarkupSerializer";

export default class TableMarkupSerializer implements ITableMarkupSerializer {
  private _rowMarkupSerializer: IRowMarkupSerializer;
  private _columnMarkupSerializer: IColumnMarkupSerializer;

  constructor(
    rowMarkupSerializer: IRowMarkupSerializer,
    columnMarkupSerializer: IColumnMarkupSerializer,
  ) {
    this._rowMarkupSerializer = rowMarkupSerializer;
    this._columnMarkupSerializer = columnMarkupSerializer;
  }

  serialize(tableMarkup: TableMarkup): object {
    let result = {
      rows: {} as ObjectDictionary,
      columns: {} as ObjectDictionary,
    };

    tableMarkup.rows.forEach((key, value) => {
      result.rows[key.toString()] = this._rowMarkupSerializer.serialize(value);
    });

    tableMarkup.columns.forEach((key, value) => {
      result.columns[key.toString()] = this._columnMarkupSerializer.serialize(
        value,
      );
    });

    return result;
  }
}
