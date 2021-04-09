import IRowMarkupDeserializer from "./Interfaces/IRowMarkupDeserializer";
import { RowMarkup } from "@xlsx-model/models";

export default class RowMarkupDeserializer implements IRowMarkupDeserializer {
  deserialize(objectToDeserialize: any): RowMarkup {
    let rowMarkup = new RowMarkup();

    rowMarkup.height = objectToDeserialize.height;
    rowMarkup.level = objectToDeserialize.level;
    rowMarkup.collapsed = objectToDeserialize.collapsed;

    return rowMarkup;
  }
}
