import IWorkbookModelSerializer from "./IWorkbookModelSerializer";
import { WorkbookModel } from "@xlsx-model/models";

export default class WorkbookModelSerializer
  implements IWorkbookModelSerializer {
  deserialize(workbookModelObject: object): WorkbookModel {
    throw "";
  }

  serialize(workbookModel: WorkbookModel): object {
    throw "";
  }
}
