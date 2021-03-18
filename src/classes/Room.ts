import Conversation from './Conversation';
import User from './User';

export default class Room {
  private isPrivate: boolean;
  private conversation: Conversation;
  private users: User[];

  constructor(isPrivate: boolean, users?: User[]) {
    this.isPrivate = isPrivate;
    this.conversation = new Conversation();
    this.users = users ?? [];
    this.users.forEach(user => this.conversation.addObserver(user))
  }

  getConversation() {
    return this.conversation;
  }

  public addUser(user: User) {
    if (this.isPrivate) {
      console.log("Erreur : cette conversation est privée")
    } else {
      this.users.push(user)
      this.conversation.addObserver(user)
    }
  }
}
