//オブジェクトリテラルを宣言する。
let youtuber = {
    list: { 
        business: {
            youtuber: [
                { name: "しまぶー", age: 20, teachPrograming(){}},
                { name: "あつ", age: 37, teachHistory(){}}
            ],
            teach(){}
        },
        entertainment: {
            youtuber: [{ name: "ヒカキン"},{ name: "はじめしゃちょー"}],
            makeSmile(){}
        }
    },
    plan(){},
    uploadVideo(){}
};


youtuber.list.business.youtuber[0].name;
youtuber.plan();

export default youtuber;


//windowは省略OK
window.console.log();

window.alert();

window.document.getElementById();
