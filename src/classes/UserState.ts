import User from "./User";

export default abstract class UserState {
    protected setUserState(user: User, state: UserState) {
        user.setState(state)
    }
}