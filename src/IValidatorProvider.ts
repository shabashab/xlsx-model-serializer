import { Validator } from "jsonschema";

export default interface IValidatorProvider {
  getValidator(): Validator;
}
