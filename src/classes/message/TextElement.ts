import { IMessageFormatter } from '../../interfaces';
import MessageElement from './MessageElement';

export default class TextElement extends MessageElement {
  private isBold: boolean;
  private isItalic: boolean;

  constructor(value: string, isBold?: boolean, isItalic?: boolean) {
    super(value);
    this.isBold = isBold || false;
    this.isItalic = isItalic || false;
  }

  public getIsBold(): boolean {
    return this.isBold;
  }

  public getIsItalic(): boolean {
    return this.isItalic;
  }
}
