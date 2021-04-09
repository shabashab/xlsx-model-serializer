import IColumnMarkupDeserializer from "./Interfaces/IColumnMarkupDeserializer";
import { ColumnMarkup } from "@xlsx-model/models";

export default class ColumnMarkupDeserializer
  implements IColumnMarkupDeserializer {
  deserialize(objectToDeserialize: any): ColumnMarkup {
    let columnMarkup = new ColumnMarkup();

    columnMarkup.width = objectToDeserialize.width;
    columnMarkup.level = objectToDeserialize.level;
    columnMarkup.collapsed = objectToDeserialize.collapsed;

    return columnMarkup;
  }
}
