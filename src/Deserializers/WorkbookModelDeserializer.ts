import IWorkbookModelDeserializer from "./Interfaces/IWorkbookModelDeserializer";
import { WorkbookModel } from "@xlsx-model/models";
import IWorksheetModelDeserializer from "./Interfaces/IWorksheetModelDeserializer";
import WorksheetModelDeserializer from "./WorksheetModelDeserializer";
import RowModelDeserializer from "./RowModelDeserializer";
import TableMarkupDeserializer from "./TableMarkupDeserializer";
import RowMarkupDeserializer from "./RowMarkupDeserializer";
import ColumnMarkupDeserializer from "./ColumnMarkupDeserializer";
import CellModelDeserializer from "./CellModelDeserializer";
import CellStyleDeserializer from "./CellStyleDeserializer";

export default class WorkbookModelDeserializer
  implements IWorkbookModelDeserializer {
  private _worksheetDeserializer: IWorksheetModelDeserializer;

  private static initWorksheetModelDeserializer(): IWorksheetModelDeserializer {
    let cellStyleDeserializer = new CellStyleDeserializer();
    let cellModelDeserializer = new CellModelDeserializer(
      cellStyleDeserializer,
    );
    let rowModelDeserializer = new RowModelDeserializer(cellModelDeserializer);

    let rowMarkupDeserializer = new RowMarkupDeserializer();
    let columnMarkupDeserializer = new ColumnMarkupDeserializer();
    let tableMarkupDeserializer = new TableMarkupDeserializer(
      rowMarkupDeserializer,
      columnMarkupDeserializer,
    );

    return new WorksheetModelDeserializer(
      rowModelDeserializer,
      tableMarkupDeserializer,
    );
  }

  constructor(worksheetModelDeserializer?: IWorksheetModelDeserializer) {
    this._worksheetDeserializer =
      worksheetModelDeserializer ||
      WorkbookModelDeserializer.initWorksheetModelDeserializer();
  }

  deserialize(objectToDeserialize: any): WorkbookModel {
    let workbookModel = new WorkbookModel();

    objectToDeserialize["worksheets"].forEach((value: any) => {
      workbookModel.worksheets.push(
        this._worksheetDeserializer.deserialize(value),
      );
    });

    return workbookModel;
  }
}
