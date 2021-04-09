export default interface ISerializer<T> {
  serialize(objectToSerialize: T): object;
}
