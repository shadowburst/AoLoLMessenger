import UserState from "./UserState";
import UserStateActive from "./UserStateActive";

export default class User {
    constructor() {
        this.state = UserStateActive.getInstance()
    }

    private state: UserState

    public setState(state: UserState): void {
        this.state = state
    }

    private sendMessage(message: string, room: Room) {

    }
}