//APIの取得


//非同期関数 async awaitを使用する方法
async function callAPI(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json() ;
    console.log(users);
}
callAPI();

//thenを使う方法
function callAPI(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(res) {
            return res.json();
        })
        .then(function (users) {
            console.log(users);
        });
}
callAPI();

//XMLHttpRequestを使う方法
function callAPI(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function() {
        console.log(xhr.response);
    };

}
callAPI();