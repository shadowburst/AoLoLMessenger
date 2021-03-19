import { Room, User, UserStateActive, UserStateInactive } from './src/classes';

const user1 = new User('Peter');
const user2 = new User('Marine');
const room = new Room(true, [user1, user2]);

user1.sendMessage('Salut !', room);
user1.logout();
user2.sendMessage('Hey !', room);
user2.sendMessage("C'est moi :p", room);
user1.login();
