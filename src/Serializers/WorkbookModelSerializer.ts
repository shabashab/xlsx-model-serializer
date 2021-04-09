import { WorkbookModel } from "@xlsx-model/models";
import IWorkbookModelSerializer from "./Interfaces/IWorkbookModelSerializer";
import IWorksheetModelSerializer from "./Interfaces/IWorksheetModelSerializer";
import WorksheetModelSerializer from "./WorksheetModelSerializer";
import RowModelSerializer from "./RowModelSerializer";
import CellModelSerializer from "./CellModelSerializer";
import CellStyleSerializer from "./CellStyleSerializer";
import TableMarkupSerializer from "./TableMarkupSerializer";
import RowMarkupSerializer from "./RowMarkupSerializer";
import ColumnMarkupSerializer from "./ColumnMarkupSerializer";

export default class WorkbookModelSerializer
  implements IWorkbookModelSerializer {
  private _worksheetModelSerializer: IWorksheetModelSerializer;

  initWorksheetModelSerializer(): IWorksheetModelSerializer {
    let columnMarkupSerializer = new ColumnMarkupSerializer();
    let rowMarkupSerializer = new RowMarkupSerializer();
    let markupSerializer = new TableMarkupSerializer(
      rowMarkupSerializer,
      columnMarkupSerializer,
    );

    let cellStyleSerializer = new CellStyleSerializer();
    let cellModelSerializer = new CellModelSerializer(cellStyleSerializer);
    let rowModelSerializer = new RowModelSerializer(cellModelSerializer);

    return new WorksheetModelSerializer(markupSerializer, rowModelSerializer);
  }

  constructor(worksheetModelSerializer?: IWorksheetModelSerializer) {
    this._worksheetModelSerializer =
      worksheetModelSerializer || this.initWorksheetModelSerializer();
  }

  serialize(workbookModel: WorkbookModel): object {
    let result = {
      worksheets: [] as object[],
    };

    workbookModel.worksheets.forEach((worksheet) => {
      result.worksheets.push(
        this._worksheetModelSerializer.serialize(worksheet),
      );
    });

    return result;
  }
}
