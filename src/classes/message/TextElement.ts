import MessageElement from './MessageElement';

export default class TextElement extends MessageElement {
  private isBold: boolean;
  private isItalic: boolean;

  constructor(value: string, isBold?: boolean, isItalic?: boolean) {
    super(value);
    this.isBold = isBold || false;
    this.isItalic = isItalic || false;
  }

  getIsBold() {
    return this.isBold;
  }

  getIsItalic() {
    return this.isItalic;
  }
}
