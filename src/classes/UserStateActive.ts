import { Message } from "./message";
import User from "./User";
import UserState from "./UserState";

export default class UserStateActive extends UserState {
    private constructor() {
        super("actif");
    }

    private static instance: UserStateActive | null = null;

    public static getInstance(): UserStateActive {
        return this.instance ? this.instance : new UserStateActive();
    }

    public update(content: Message, user: User): void {
        super.printMessage(content, user)
    }
}
