import { User } from '.';
import { Message } from './message';
import Observable from './Observable';

export default class Conversation extends Observable {
  protected messages: Message[];

  constructor() {
    super();
    this.messages = [];
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public sendMessage(content: string, user: User): void {
    const message = new Message(user, content)
    this.messages.push(message);

    console.log(`L'utilisateur ${user.getName()} envoie le message '${content}'`)

    // Notifier les observeurs de l'évènement
    this.notifyObservers(message);
  }
}
