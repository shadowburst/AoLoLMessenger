import { Message } from './message';
import User from './User';

export default abstract class UserState {
  constructor(name: string) {
    this.name = name;
    this.waitingMessages = [];
  }

  protected name: string;
  protected waitingMessages: Message[];

  protected setUserState(user: User, state: UserState) {
    user.setState(state);
    this.waitingMessages.forEach((message: Message) => {
      this.printMessage(message, user);
    });
    this.waitingMessages = [];
  }

  public abstract update(content: any, user: User): void;

  public getName() {
    return this.name;
  }

  public abstract login(user: User): void;
  public abstract logout(user: User): void;

  protected printMessage(content: Message, user: User) {
    console.log(
      `Message de ${content
        .getSender()
        .getName()} reçu par ${user.getName()} à ${content.getTimestamp()}:`,
      content.getValue()
    );
  }
}
