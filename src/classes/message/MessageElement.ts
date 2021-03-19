import { IMessageFormatter } from "../../interfaces";

export default abstract class MessageElement {
  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public abstract format(formatter: IMessageFormatter): MessageElement[]
}
