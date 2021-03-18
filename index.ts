import { Room, User, UserStateInactive } from "./src/classes";

const user1 = new User("Peter");
const user2 = new User("Marine");
const room = new Room(true, [user1, user2]);

user1.sendMessage("Salut !", room);
user1.setState(UserStateInactive.getInstance())
user2.sendMessage("Hey !", room);
