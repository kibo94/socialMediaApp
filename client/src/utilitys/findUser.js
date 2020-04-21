export function findUser (users , userName) {
       return users.find(user => user.userName === userName); 
}