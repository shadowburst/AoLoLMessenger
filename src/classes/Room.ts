import Conversation from './Conversation';
import User from './User';

export default class Room {
  private isPrivate: boolean;
  private conversation: Conversation;

  constructor(isPrivate: boolean, users: User[] = []) {
    this.isPrivate = isPrivate;
    this.conversation = new Conversation();
    users.forEach((user) => this.conversation.addObserver(user));
  }

  public getConversation(): Conversation {
    return this.conversation;
  }

  public getUsers(): User[] {
    return this.conversation.getObservers() as User[];
  }

  public addUser(user: User): void {
    if (this.isPrivate) {
      console.log('Erreur : cette conversation est privée');
    } else {
      this.conversation.addObserver(user);
    }
  }
}
