import { Message } from './message';
import User from './User';
import UserState from './UserState';
import UserStateInactive from './UserStateInactive';

export default class UserStateActive extends UserState {
  private constructor() {
    super('actif');
  }

  private static instance: UserStateActive | null = null;

  public static getInstance(): UserStateActive {
    if (!this.instance) {
      this.instance = new UserStateActive();
    }
    return this.instance;
  }

  public login(user: User): void {
    console.log(`L'utilisateur ${user.getName()} est déjà connecté`);
  }
  public logout(user: User): void {
    console.log(`L'utilisateur ${user.getName()} se déconnecte`);
    this.setUserState(user, UserStateInactive.getInstance());
  }

  public update(content: Message, user: User): void {
    super.printMessage(content, user);
  }
}
