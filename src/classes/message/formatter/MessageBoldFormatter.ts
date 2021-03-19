import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageBoldFormatter implements IMessageFormatter {
  public apply(message: IMessage): void {
    console.log('Visité pour le gras');
  }
}
