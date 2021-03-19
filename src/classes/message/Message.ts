import { User } from '..';
import { IMessage, IMessageFormatter } from '../../interfaces';
import {
  MessageBoldFormatter,
  MessageColorFormatter,
  MessageItalicFormatter,
  MessageLinkFormatter,
} from './formatter';
import MessageElement from './MessageElement';
import TextElement from './TextElement';

export default class Message implements IMessage {
  private sender: User;
  private timestamp: Date;
  private element: MessageElement | null;

  constructor(sender: User, message?: string, timestamp?: Date) {
    this.sender = sender;
    this.timestamp = timestamp ?? new Date();
    this.element = message ? new TextElement(message) : null;

    this.format(MessageBoldFormatter.getInstance());
    this.format(MessageItalicFormatter.getInstance());
    this.format(MessageColorFormatter.getInstance());
    this.format(MessageLinkFormatter.getInstance());
  }

  public getSender(): User {
    return this.sender;
  }

  public getTimestamp(): Date {
    return this.timestamp;
  }

  public getValue(): string {
    return this.element?.getValue() ?? '';
  }

  public format(formatter: IMessageFormatter): void {
    this.element = this.element?.format(formatter) ?? null;
  }

  public clone(): any {
    const message = new Message(this.sender, undefined, this.timestamp);
    message.element = this.element;
    return message;
  }
}
