//変数とは⇨データを保存する箱
const foo = document.getElementById("foo");
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetheight;

const fooArea = fooHeight * fooWidth;


//変数の宣言

const foo = 100,
        fooz = 400,
        foox = 500;
let bar = 200;
var baz = 300;

let zooWidth = 100; //camelCase・・・変数名の2つ目の単語の頭文字が大文字のこと
let zoo_Width = 200; //snakeCase・・・変数名の間にアンダーバーがある

//予約語は変数名に使えない

/**
 * constの特徴
 * 再代入、再定義できない
 *
 * letの特徴
 * 再代入できる、再定義できない
 *
 * varの特徴
 * 再代入できる、再定義できる。
 *
 * ⇨基本的にconstを使う。定義的にガッチリしているため。
 * どうしても使わなければいけなくなったらlet→varと使っていく
 * もともとvarしかなかった。後方互換性を保つためvarを残している。
 * */