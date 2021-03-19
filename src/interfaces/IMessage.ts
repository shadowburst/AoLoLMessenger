import { MessageElement } from '../classes/message';
import IMessageFormatter from './IMessageFormatter';

export default interface IMessage {
  format(formatter: IMessageFormatter): void;
  getElements(): MessageElement[];
}
