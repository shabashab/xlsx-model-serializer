import ITableMarkupDeserializer from "./Interfaces/ITableMarkupDeserializer";
import { TableMarkup } from "@xlsx-model/models";
import IColumnMarkupDeserializer from "./Interfaces/IColumnMarkupDeserializer";
import IRowMarkupDeserializer from "./Interfaces/IRowMarkupDeserializer";

export default class TableMarkupDeserializer
  implements ITableMarkupDeserializer {
  private _columnMarkupDeserializer: IColumnMarkupDeserializer;
  private _rowMarkupDeserializer: IRowMarkupDeserializer;

  constructor(
    rowMarkupDeserializer: IRowMarkupDeserializer,
    columnMarkupDeserializer: IColumnMarkupDeserializer,
  ) {
    this._rowMarkupDeserializer = rowMarkupDeserializer;
    this._columnMarkupDeserializer = columnMarkupDeserializer;
  }

  deserialize(objectToDeserialize: any): TableMarkup {
    let tableMarkup = new TableMarkup();

    Object.entries(objectToDeserialize.rows).forEach(([key, value]) => {
      tableMarkup.rows.setValue(
        parseInt(key),
        this._rowMarkupDeserializer.deserialize(value),
      );
    });

    Object.entries(objectToDeserialize.columns).forEach(([key, value]) => {
      tableMarkup.columns.setValue(
        parseInt(key),
        this._columnMarkupDeserializer.deserialize(value),
      );
    });

    tableMarkup.rowsCount = objectToDeserialize.rowsCount;
    tableMarkup.columnsCount = objectToDeserialize.columnsCount;

    return tableMarkup;
  }
}
