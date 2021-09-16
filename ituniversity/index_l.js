//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数(メソッド)
//DOM操作
function addList(user) {
    const list = document.createElement("li")
    list.innerText = user.name;
    lists.appendChild(list);
   }
//データのやり取り
async function getUsers() {   
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
 }
async function　listUsers(){
    const users = await getUsers();
    users.forEach(addList);
};

//イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);




   //forの場合
// for (let index = 0; index < users.length; index++) {
//     const user = users[index];
//     const list = document.createElement("li")
//     list.innerText = user.name;
//     lists.appendChild(list);
// };