import User from "./User";
import UserState from "./UserState";

export default class UserStateActive extends UserState {
    private constructor() {
        super();
    }

    private static instance: UserStateActive | null = null;

    public static getInstance() {
        return this.instance ? this.instance : new UserStateActive()
    }

    public update(content: string, user: User): void {
        console.log(content as string)
    }
}