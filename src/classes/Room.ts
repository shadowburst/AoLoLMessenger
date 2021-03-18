import { Conversation } from '.';

export default class Room {
  isPrivate: boolean;
  conversation: Conversation;

  constructor(conversation: Conversation) {
    this.isPrivate = false;
    this.conversation = conversation;
  }
}
