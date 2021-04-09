import IRowMarkupSerializer from "./Interfaces/IRowMarkupSerializer";
import { RowMarkup } from "@xlsx-model/models";

export default class RowMarkupSerializer implements IRowMarkupSerializer {
  serialize(rowMarkup: RowMarkup): object {
    return {
      collapsed: rowMarkup.collapsed,
      level: rowMarkup.level,
      height: rowMarkup.height,
    };
  }
}
