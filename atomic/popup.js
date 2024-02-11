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
    fetch("https://zougogenerator.onrender.com/generate_zougo/",{
        method: "POST",
        body: fd
    }).then(response => {
        if (!response.ok) {
        throw new Error("サーバーエラー: " + response.status);
        }
        return response.json(); // 応答をJSON形式として解析
    })
    .then(data => {
        //成功
        console.log(data);
        document.getElementById("output").value = data["zougo"];

        var tweet_button = document.createElement("a")
        tweet_button.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw")
        tweet_button.setAttribute("class", "twitter-share-button")
        tweet_button.setAttribute("data-show-count", "false")
        tweet_button.setAttribute("data-size", "large")
        tweet_button.setAttribute("text", "ツイート文章")
        tweet_button.setAttribute("target", "_blank")
        tweet_button.setAttribute("hashtags", "造語ジェネレーター")
        tweet_button.innerText = "Xでポストする"

        var script = document.createElement("script")
        script.setAttribute("async", true)
        script.setAttribute("src", "https://platform.twitter.com/widgets.js")
        script.setAttribute("charset", "utf-8")

        document.body.appendChild(tweet_button);
        document.body.appendChild(script)
    })
    .catch(error => {
        //失敗
        console.error("Fetchエラー:", error);
    });
    }
});