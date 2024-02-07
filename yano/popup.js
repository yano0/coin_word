const generate = document.getElementById("generate")
generate.addEventListener('click', () => {
    console.log('clicked');
    var inputText = document.getElementById("inputText").value;
    // 入力が空でないことを確認
    if(inputText.trim() !== '') {
        // APIに送信するデータを作成
        var input = {
        text: inputText
        };
    fetch("https://zougogenebackend.onrender.com/generate_zougo/",{
        method: "POST",
        body:JSON.stringify(input),
        headers:{"Content-Type": "application/json"}}
    ).then(response => {
        if (!response.ok) {
        throw new Error("サーバーエラー: " + response.status);
        }
        return response.json(); // 応答をJSON形式として解析
    })
    .then(data => {
        console.log(data); // サーバーからの応答をコンソールに表示します
        // ここで必要な処理を行います
    })
    .catch(error => {
        console.error("Fetchエラー:", error);
    });
    // chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //         fetch('https://zougogenebackend.onrender.com/welcome/') // ローカルのPythonサーバーにリクエストを送信
    //             .then(response => response.json())
    //             .then(data => sendResponse(data))
    //             .catch(error => console.error(error));
    //         return true;
    // });
    console.log(response);
})
