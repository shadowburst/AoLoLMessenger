import { IMessageFormatter } from '../../interfaces';
import MessageElement from './MessageElement';

export default class LinkElement extends MessageElement {
    public format(formatter: IMessageFormatter): MessageElement[] {
        throw new Error('Method not implemented.');
    }
}
