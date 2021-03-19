import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageItalicFormatter implements IMessageFormatter {
  apply(message: IMessage): void {
    console.log("Visité pour l'italique");
  }
}
