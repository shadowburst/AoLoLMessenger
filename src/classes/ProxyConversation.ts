import Conversation from './Conversation';

export default class ProxyConversation extends Conversation {
  public getMessage() {
    if (this.messages.length === 0) this.load();

    return this.messages;
  }

  private load() {
    // TODO : Load messages
  }
}
