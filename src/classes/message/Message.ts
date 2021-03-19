import { User } from '..';
import { IMessage, IMessageFormatter } from '../../interfaces';
import { MessageBoldFormatter, MessageItalicFormatter, MessageLinkFormatter } from './formatter';
import MessageElement from './MessageElement';
import TextElement from './TextElement';

export default class Message implements IMessage {
  private sender: User;
  private timestamp: Date;
  private elements: MessageElement[];

  constructor(sender: User, message?: string, timestamp?: Date) {
    this.sender = sender;
    this.timestamp = timestamp ?? new Date();
    this.elements = message ? [new TextElement(message)] : [];
    this.format(MessageBoldFormatter.getInstance());
    this.format(MessageItalicFormatter.getInstance());
    this.format(MessageLinkFormatter.getInstance());
  }

  public getSender(): User {
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

  public setElements(elements: MessageElement[]): void {
    this.elements = elements;
  }

  public format(formatter: IMessageFormatter): void {
    const formattedElements: MessageElement[] = [];

    this.elements.forEach((element: MessageElement) => {
      formattedElements.push(...element.format(formatter));
    });

    this.setElements(formattedElements);
  }

  public clone(): any {
    const message = new Message(this.sender, undefined, this.timestamp);
    message.setElements(this.elements);
    return message;
  }
}
