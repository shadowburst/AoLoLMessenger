import MessageElement from './MessageElement';

export default class ColorElement extends MessageElement {
  private color: string;

  constructor(value: string, color: string) {
    super(value);
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}