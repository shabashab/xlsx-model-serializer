import { WorkbookModel } from "@xlsx-model/models";

export default interface IWorkbookModelSerializer {
  serialize(workbookModel: WorkbookModel): object;
  deserialize(workbookModelObject: object): WorkbookModel;
}
