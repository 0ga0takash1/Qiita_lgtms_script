// ==UserScript==
// @name         Add lgtms-link
// @namespace    https://greasyfork.org/users/684688
// @version      0.1
// @description  Qiitaの自分のアイコンのドロップアウト欄に「LGTMした記事一覧」を追加します。
// @author       0ga0takash1
// @match        https://qiita.com/*
// @grant        none
// ==/UserScript==

{
    // class名が「st-Header_dropdown」であるものの中のaタグをリストで収集
    const links = Array.from(
        document.querySelectorAll(".st-Header_dropdown > a")
    );
    const my_page_url = links.find((element) => element.innerText === "マイページ").href;

    // リストから一つ前の要素を検出し、before_elementに代入
    const before_element = links.find(
        (element) => element.innerText === "編集リクエスト一覧"
    );

    // 挿入する要素lgtmsを作る
    const lgtms = document.createElement("a");
    lgtms.href = `${my_page_url}/lgtms`;
    lgtms.className = "st-Header_dropdownItem";
    lgtms.innerHTML = "LGTMした記事一覧";

    // 挿入する
    before_element.parentNode.insertBefore(lgtms, before_element.nextElementSibling);
}