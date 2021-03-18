import { User } from '..';
import { IMessage, IMessageFormatter } from '../../interfaces';
import MessageElement from './MessageElement';
import TextElement from './TextElement';

export default class Message implements IMessage {
  private sender: User;
  private timestamp: Date;
  private elements: MessageElement[];

  constructor(sender: User, message?: string) {
    this.sender = sender;
    this.timestamp = new Date();
    this.elements = message ? [new TextElement(message)] : [];
  }

  getUser() {
    return this.sender;
  }

  getTimestamp() {
    return this.timestamp;
  }

  getElements() {
    return this.elements;
  }

  format(formatter: IMessageFormatter): void {
    formatter.apply(this);
  }
}
