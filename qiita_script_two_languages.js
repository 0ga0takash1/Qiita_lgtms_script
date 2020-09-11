// ==UserScript==
// @name         Add lgtms-link2
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

    // usernameを検知する用
    const my_page_url = links.find((element) => element.innerText === "マイページ" || (element) => element.innerText === "Profile").href;
    // const my_page_url_English = links.find((element) => element.innerText === "Profile").href;

    // リストから一つ前の要素を検出し、before_elementに代入
    const before_element = links.find(
        (element) => element.innerText === "編集リクエスト一覧" ||
        (element) => element.innerText === "Edit Requests"
    );
    //const before_element_English = links.find(
        //(element) => element.innerText === "Edit Requests"
    //);

    // 挿入する要素lgtmsを作る
    const lgtms = document.createElement("a");
    lgtms.className = "st-Header_dropdownItem";
    if ( my_page_url_English === undefined ) {
        lgtms.href = `${my_page_url}/lgtms`;
        lgtms.innerHTML = "LGTMした記事一覧";
    } else {
        lgtms.href = `${my_page_url_English}/lgtms`;
        lgtms.innerHTML = "my LGTM items";        
    }

    // 挿入する
    before_element.parentNode.insertBefore(lgtms, before_element.nextElementSibling);
    before_element_English.parentNode.insertBefore(lgtms, before_element_English.nextElementSibling);
}
