import { MessageElement } from '../classes/message';
import IClonable from './IClonable';
import IMessageElementFormatter from './IMessageFormatter';

export default interface IMessage extends IClonable {
  format(formatter: IMessageElementFormatter): void;
  setElements(elements: MessageElement[]): void;
  getElements(): MessageElement[];
}
