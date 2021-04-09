export default interface IDeserializer<T> {
  deserialize(objectToDeserialize: object): T;
}
