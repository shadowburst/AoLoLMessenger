import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageLinkFormatter implements IMessageFormatter {
  public apply(message: IMessage): void {
    console.log('Visité pour les liens');
  }
}
