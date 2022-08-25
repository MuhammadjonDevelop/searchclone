// google
let inpg = document.getElementById("googleinp")
let btng = document.getElementById("googlesearch")
btng.onclick = function() {
    let googleurl = "https://www.google.com/search?q="+inpg.value;
    window.open(googleurl, '_self')
}


// yandex
let inpy = document.getElementById("yandexinp")
let btny = document.getElementById("yandexsearch")
btny.onclick = function() {
    let yandexurl = "https://yandex.ru/search/?text="+inpy.value;
    window.open(yandexurl, '_self')
}

// youtube 
let inpyo = document.getElementById("youinp")
let btnyo = document.getElementById("yousearch")
btnyo.onclick = function() {
    let yourl = "https://www.youtube.com/results?search_query="+inpyo.value;
    window.open(yourl, '_self')
} 

// mail.ru
let inpm = document.getElementById("mailinp")
let btnm = document.getElementById("mailsearch")
btnm.onclick = function() {
    let murl = "https://go.mail.ru/search?q="+inpm.value;
    window.open(murl, '_self')
}


// Microsoft Bing
let inpmic = document.getElementById("minp")
let btnmic = document.getElementById("msearch")
btnmic.onclick = function() {
    let micurl ="https://www.bing.com/search?q="+inpmic.value;
    window.open(micurl, '_self')
}

// DuckDuckGo
let inpdu = document.getElementById("dinp")
let btndu = document.getElementById("dsearch")
btndu.onclick = function() {
    let duurl ="https://duckduckgo.com/?q="+inpdu.value;
    window.open(duurl, '_self')
}