// ==UserScript==
// @name         Add lgtms-link_English
// @namespace    https://greasyfork.org/users/684688
// @version      0.2
// @description  Qiitaの自分のアイコンのドロップアウト欄に「LGTMした記事一覧」を追加します。
// @author       0ga0takash1
// @match        https://qiita.com/*
// @grant        none
// ==/UserScript==

{
    // class名が「st-Header_dropdown」であるものの中のaタグをリストで収集
    const links = Array.from(
        document.querySelectorAll(".st-RenewalHeader_dropdown > a")
    );

    // usernameを検知する用
    const my_page_url = links.find((element) => element.innerText === "Profile").href;

    // リストから一つ前の要素を検出し、before_elementに代入
    const before_element = links.find(
        (element) => element.innerText === "Stock Articles"
    );

    // 挿入する要素lgtmsを作る
    const lgtms = document.createElement("a");
    lgtms.href = `${my_page_url}/lgtms`;
    lgtms.className = "st-RenewalHeader_dropdownItem";
    lgtms.innerHTML = "My LGTM items";

    // 挿入する
    before_element.parentNode.insertBefore(lgtms, before_element.nextElementSibling);
}
