import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageLinkFormatter implements IMessageFormatter {
  apply(message: IMessage): void {
    console.log('Visité pour les liens');
  }
}
