import UserState from "./UserState";

export default class UserStateInactive extends UserState {
    private constructor() {
        super();
    }

    private instance: UserStateInactive | null = null;

    public getInstance() {
        return this.instance ? this.instance : new UserStateInactive()
    }
}