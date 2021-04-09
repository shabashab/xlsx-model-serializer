//export { default as IWorkbookModelSerializer } from "./IWorkbookModelSerializer";
import FileValidatorProvider from "./FileValidatorProvider";

let validatorProvider = new FileValidatorProvider();
let validator = validatorProvider.getValidator();
console.log(validator);
