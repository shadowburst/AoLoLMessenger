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
  }

  getConversation() {
    return this.conversation;
  }
}
