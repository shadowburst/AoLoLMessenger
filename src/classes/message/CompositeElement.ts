import { IMessageFormatter } from '../../interfaces';
import MessageElement from './MessageElement';

export default class CompositeElement extends MessageElement {
  private parent: MessageElement;
  private elements: MessageElement[];

  constructor(parent: MessageElement, elements?: MessageElement[]) {
    super('');
    this.parent = parent;
    this.elements = elements ?? [];
  }

  public getParent(): MessageElement {
    return this.parent;
  }

  public getElements(): MessageElement[] {
    return this.elements;
  }

  public getValue(): string {
    return this.elements.map((element) => element.getValue()).join('');
  }

  public add(element: MessageElement): void {
    this.elements.push(element);
  }

  public remove(element: MessageElement): void {
    const index = this.elements.indexOf(element);
    if (index > -1) {
      this.elements.splice(index, 1);
    }
  }

  public format(formatter: IMessageFormatter): MessageElement[] {
    throw new Error('Method not implemented.');
  }
}
