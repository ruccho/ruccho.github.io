// アプリを開く。アプリがインストールされていなければサイトを開く。
//function launchApp() {
document.open();
//クエリを読み込む
var query = window.location.search;
if (query == "") {
    document.write("クエリ情報を読み込めませんでした。URLが壊れている可能性があります。");
} else {

    var IOS_SCHEME = 'io.github.ruccho.cir';
    //var IOS_STORE = 'iOSのストアURL';
    var ANDROID_SCHEME = 'io.github.ruccho.cir';
    //var ANDROID_PACKAGE = 'Androidのパッケージ名';
    // var PC_SITE = '公式サイトのURLとかここに入れるべし！'

    var userAgent = navigator.userAgent.toLowerCase();
    // iPhone端末
    if (userAgent.search(/iphone|ipad|ipod/) > -1) {
        launch_frame.location.href = IOS_SCHEME + '://' + query;
    }
    // Android端末
    else if (userAgent.search(/android/) > -1) {
        launch_frame.location.href = ANDROID_SCHEME + '://' + query;
    }
    // その他・不明・PCなどの場合はサイトを開く。
    else {
    }
    document.write("アプリが自動的に開かない場合は、下記のコードをアプリ内で入力してください。(オンラインモード→コード)<br>");
    document.write("<div class='well' style='overflow: auto;word-wrap: break-word;'>" + query + "</div>");
    document.write("<button class='btn' data-clipboard-target='.well'>コピーする</button>");
}
document.close();
//}

// ページ読み込み時に実行
/*window.onload = function () {
    launchApp();
}*/