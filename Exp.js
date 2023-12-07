var a = document.querySelector("#box")
var btn = document.querySelector("button")
var flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        a.style.backgroundColor = " rgb(228, 231, 42)";
        btn.innerHTML = "OFF";
        flag = 1;
    }
    else {
        a.style.backgroundColor = "rgb(243, 243, 236)";
        btn.innerHTML = "ON"
        flag = 0;
    }
})