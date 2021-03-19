import { IMessageFormatter } from '../../interfaces';
import MessageElement from './MessageElement';

export default class ColorElement extends MessageElement {
  private color: string;

  constructor(value: string, color: string) {
    super(value);
    this.color = color;
  }

  public getColor(): string {
    return this.color;
  }

  public format(formatter: IMessageFormatter): MessageElement[] {
    throw new Error('Method not implemented.');
  }
}
