import { MessageElement } from '../classes/message';
import IClonable from './IClonable';
import IMessageFormatter from './IMessageFormatter';

export default interface IMessage extends IClonable {
  format(formatter: IMessageFormatter): void;
  setElements(elements: MessageElement[]): void;
  getElements(): MessageElement[];
}
