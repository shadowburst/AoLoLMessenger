import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageBoldFormatter implements IMessageFormatter {
  private constructor() {}

  private static instance: MessageBoldFormatter | null;

  public static getInstance(): MessageBoldFormatter {
    if (!this.instance) {
      this.instance = new MessageBoldFormatter();
    }
    return this.instance;
  }

  public apply(message: MessageElement): MessageElement {
    console.log('Visité pour le gras');
    return message;
  }
}
