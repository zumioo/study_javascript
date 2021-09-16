//短縮記法
const foo = {
    //alert: function () (),
    alert() {},
 }

//関数の例
 function cut(food) {
     const cutfood = food.slice();
    return cutfood;
 }
 const cutCarrot = cut(cacrrot);//にんじん
 const cutPotato = cut(popato);//ジャガイモ


 //返り値なし
 function isLessThan140() {
     return Text.length <= 140;
 };

 //匿名関数
const isTweetable = function(Text){
    return Text.length <= 140;
}
 console.log(isTweetable("foo"));



/*コールバック関数について↓
function 高階関数(コールバック関数) {
    コールバック関数();
}

//高階関数を使った場合
//function washed(fn) {
//    if(手洗いを終えたら ){
//        fn();//コールバック関数の処理
//    }
//}
//function bring(food){
//       //食材を持ってきてもらう処理
//}
//function peer(food){
//        //食材の皮を剥く
//}
//function cut(food){
//        //食材をきる
*/



function unfollow() {
    console.log("リポジトリ削除");
}
//匿名関数
const canceltweet = function() {
    console.log("ツイートをキャンセルしました");
};
//コールバック関数
function confirmed(fn){
    const input = window.prompt("実行しますか？");
    if (input === "実行"){
        fn();
    }
}
confirmed(unfollow);