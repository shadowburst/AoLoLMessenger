import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageItalicFormatter implements IMessageFormatter {
  private constructor() {}

  private static instance: MessageItalicFormatter | null

  public static getInstance(): MessageItalicFormatter {
    if (!this.instance) {
      this.instance = new MessageItalicFormatter();
    }
    return this.instance;
  }

  public apply(message: MessageElement): MessageElement[] {
    console.log("Visité pour l'italique");
    return []
  }
}
