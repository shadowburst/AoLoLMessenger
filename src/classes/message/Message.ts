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

  public getUser(): User {
    return this.sender;
  }

  public getTimestamp(): Date {
    return this.timestamp;
  }

  public getValue(): string {
    return this.elements.map((element) => element.getValue()).join('');
  }

  public getElements(): MessageElement[] {
    return this.elements;
  }

  public format(formatter: IMessageFormatter): void {
    formatter.apply(this);
  }
}
