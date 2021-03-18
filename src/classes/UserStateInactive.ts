import User from "./User";
import UserState from "./UserState";

export default class UserStateInactive extends UserState {
    private constructor() {
        super();
    }

    private static instance: UserStateInactive | null = null;

    public static getInstance() {
        return this.instance ? this.instance : new UserStateInactive()
    }

    public update(content: string, user: User): void {
        console.log(`Utilisateur ${user.getName()} inactif, message reçu en attente`)
    }
}