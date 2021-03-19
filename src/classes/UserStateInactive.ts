import { Message } from './message';
import User from './User';
import UserState from './UserState';

export default class UserStateInactive extends UserState {
    private constructor() {
        super("inactif");
    }

    private static instance: UserStateInactive | null = null;

    public static getInstance(): UserStateInactive {
        return this.instance ? this.instance : new UserStateInactive();
    }

    public update(content: Message, user: User): void {
        console.log(
            `Utilisateur ${user.getName()} inactif, message reçu en attente`
        );

        this.waitingMessages.push(content)
    }
}
