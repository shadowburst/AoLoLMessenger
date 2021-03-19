import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageColorFormatter implements IMessageFormatter {
  private constructor() {}

  private static instance: MessageColorFormatter | null;

  public static getInstance(): MessageColorFormatter {
    if (!this.instance) {
      this.instance = new MessageColorFormatter();
    }
    return this.instance;
  }

  public apply(message: MessageElement): MessageElement {
    console.log('Visité pour la couleur');
    return message;
  }
}
