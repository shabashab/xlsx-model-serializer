import IColumnMarkupSerializer from "./Interfaces/IColumnMarkupSerializer";
import { ColumnMarkup } from "@xlsx-model/models";

export default class ColumnMarkupSerializer implements IColumnMarkupSerializer {
  serialize(columnMarkup: ColumnMarkup): object {
    return {
      width: columnMarkup.width,
      level: columnMarkup.level,
      collapsed: columnMarkup.collapsed,
    };
  }
}
