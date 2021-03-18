export default abstract class MessageElement {
  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}
