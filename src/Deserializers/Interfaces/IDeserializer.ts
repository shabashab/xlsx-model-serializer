export default interface IDeserializer<T> {
  deserialize(objectToDeserialize: any): T;
}
