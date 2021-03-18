import Conversation from './Conversation';

export default class ProxyConversation extends Conversation {
  getMessage() {
    return this.messages;
  }

  private load() {
    // TODO : Load messages
  }
}
