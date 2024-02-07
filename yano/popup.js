const generate = document.getElementById("generate")
if (generate) {
    console.log('found')
    generate.addEventListener('click', () => {
        console.log('clicked')
        chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
                fetch('https://zougogenebackend.onrender.com/welcome/') // ローカルのPythonサーバーにリクエストを送信
                    .then(response => response.json())
                    .then(data => sendResponse(data))
                    .catch(error => console.error(error));
                return true;
        });
    })
}
else {
    console.log('not found')
}
