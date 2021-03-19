import { MessageElement } from '..';
import { IMessage, IMessageFormatter } from '../../../interfaces';

export default class MessageColorFormatter implements IMessageFormatter {
  private constructor() {}

  private static instance: MessageColorFormatter | null

  public static getInstance(): MessageColorFormatter {
    if (!this.instance) {
      this.instance = new MessageColorFormatter();
    }
    return this.instance;
  }

  public apply(message: MessageElement): MessageElement[] {
    console.log('Visité pour la couleur');
    // const clone: IMessage = message.clone();
    // const elements = message.getElements();

    // const formattedElements = elements.map((element: MessageElement) => {
    //   const matches = element.getValue().match(/\{(#[a-fA-F0-9]{6}) (.*?)}/)
    //   matches
    // })

    // message.setElements(clone.getElements());
    return []
  }
}
