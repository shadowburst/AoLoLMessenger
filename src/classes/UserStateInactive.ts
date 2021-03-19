import { UserStateActive } from '.';
import { Message } from './message';
import User from './User';
import UserState from './UserState';

export default class UserStateInactive extends UserState {
  private constructor() {
    super('inactif');
  }

  private static instance: UserStateInactive | null = null;

  public static getInstance(): UserStateInactive {
    if (!this.instance) {
      this.instance = new UserStateInactive();
    }
    return this.instance;
  }

  public update(content: Message, user: User): void {
    console.log(
      `Utilisateur ${user.getName()} inactif, message reçu en attente`
    );

    this.waitingMessages.push(content);
  }

  public login(user: User): void {
    console.log(`L'utilisateur ${user.getName()} se connecte`);
    this.setUserState(user, UserStateActive.getInstance());
  }

  public logout(user: User): void {
    console.log(`L'utilisateur ${user.getName()} est déjà déconnecté`);
  }
}
