import { IObservable, IObserver } from "../interfaces";
import Room from "./Room";
import UserState from "./UserState";
import UserStateActive from "./UserStateActive";

export default class User implements IObserver {
    constructor(name: string) {
        this.name = name
        this.state = UserStateActive.getInstance()
    }

    private name: string
    private state: UserState

    public update(content: any): void {
        this.state.update(content, this)
    }

    public getName() {
        return this.name
    }

    public setState(state: UserState): void {
        this.state = state
    }

    /* comme on n'implémente pas l'interface, la méthode sendMessage
    est publique de manière à pouvoir la déclencher depuis le client */
    public sendMessage(message: string, room: Room) {
        room.getConversation().sendMessage(message)
    }
}