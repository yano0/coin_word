const generate = document.getElementById("generate")
generate.addEventListener('click', () => {
    console.log('clicked');
    var inputText = document.getElementById("inputText").value;
    // 入力が空でないことを確認
    if(inputText.trim() !== '') {
        // APIに送信するデータを作成
    console.log(inputText)
    data = {
        "input_text": inputText
    }

    let fd = new FormData();
	fd.append('input_text', inputText);

    //fetch("http://127.0.0.1:5000/generate_zougo/",{
    fetch("https://zougogenebackend.onrender.com/generate_zougo/",{
        method: "POST",
        body: fd
    }).then(response => {
        if (!response.ok) {
        throw new Error("サーバーエラー: " + response.status);
        }
        return response.json(); // 応答をJSON形式として解析
    })
    .then(data => {
        console.log(data); // サーバーからの応答をコンソールに表示します
        document.getElementById("output").value = data["zougo"];
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
    }
});