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

    public update(o: IObservable, content: object): void {
        this.state.update(content, this)
    }

    public getName(): string {
        return this.name
    }

    public setState(state: UserState): void {
        console.log(`L'utilisateur ${this.name} passe en ${state.getName()}`)
    }

    /* comme on n'implémente pas l'interface, la méthode sendMessage
    est publique de manière à pouvoir la déclencher depuis le client */
    public sendMessage(message: string, room: Room) {
        room.getConversation().sendMessage(message, this)
    }
}