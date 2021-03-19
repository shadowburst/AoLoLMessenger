import { MessageElement } from '../classes/message';

export default interface IMessageElementFormatter {
  apply(element: MessageElement): MessageElement;
}
