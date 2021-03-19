import IClonable from './IClonable';
import IMessageElementFormatter from './IMessageFormatter';

export default interface IMessage extends IClonable {
  format(formatter: IMessageElementFormatter): void;
}
