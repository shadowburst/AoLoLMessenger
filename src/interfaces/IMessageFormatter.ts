import IMessage from './IMessage';

export default interface IMessageFormatter {
  apply(message: IMessage): void;
}
