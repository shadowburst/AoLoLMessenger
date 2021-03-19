import { IMessageFormatter } from '../../interfaces';

export default abstract class MessageElement {
  protected value: string;

  constructor(value: string) {
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public format(formatter: IMessageFormatter): MessageElement[] {
    return formatter.apply(this);
  }
}
