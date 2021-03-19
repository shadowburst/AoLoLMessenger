import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageLinkFormatter implements IMessageFormatter {
  public apply(message: MessageElement): MessageElement[] {
    console.log('Visité pour les liens');
    return []
  }
}
