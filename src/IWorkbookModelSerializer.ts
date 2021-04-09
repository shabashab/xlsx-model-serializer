import { WorkbookModel } from "xlsx-model";

export default interface IWorkbookModelSerializer {
  serialize(workbookModel: WorkbookModel): object;
  deserialize(workbookModelObject: object): WorkbookModel;
}
