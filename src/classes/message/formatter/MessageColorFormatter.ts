import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageColorFormatter implements IMessageFormatter {
  public apply(message: IMessage): void {
    console.log('Visité pour la couleur');
  }
}
