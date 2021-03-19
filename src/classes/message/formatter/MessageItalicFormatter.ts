import { MessageElement } from '..';
import { IMessageFormatter } from '../../../interfaces';

export default class MessageItalicFormatter implements IMessageFormatter {
  public apply(message: MessageElement): MessageElement[] {
    console.log("Visité pour l'italique");
    return []
  }
}
