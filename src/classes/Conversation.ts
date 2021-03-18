import Observable from './Observable';

export default class Conversation extends Observable {
  protected messages: string[];

  constructor() {
    super();
    this.messages = [];
  }

  getMessage() {
    return this.messages;
  }
}
