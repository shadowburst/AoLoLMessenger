import Observable from './Observable';

export default class Conversation extends Observable {
  protected messages: string[];

  constructor() {
    super();
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }

  sendMessage(message: string) {
    this.messages.push(message);

    // Notifier les observeurs de l'évènement
    this.notifyObservers();
  }
}
