import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageLinkFormatter implements IMessageFormatter {
  private constructor() {}

  private static instance: MessageLinkFormatter | null;

  public static getInstance(): MessageLinkFormatter {
    if (!this.instance) {
      this.instance = new MessageLinkFormatter();
    }
    return this.instance;
  }

  public apply(message: MessageElement): MessageElement {
    console.log('Visité pour les liens');
    return message;
  }
}
