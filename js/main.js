let nums = document.querySelectorAll(".parent .skle span:not(:nth-child(4))");

let res = document.querySelector(".parent .res span");
let plus = document.querySelector(".parent .skle").children[7];
let minus = document.querySelector(".parent .skle").children[11];
let division = document.querySelector(".parent .skle").children[14];
let multiplication = document.querySelector(".parent .skle").lastElementChild;
let reset = document.querySelector(".parent .P-skle .buttons button:first-child");

let calc = document.querySelector(".parent .P-skle .buttons button:last-child");
let del = document.querySelector(".parent .skle").children[3];



let arr = [];


nums.forEach((e) => {
    e.addEventListener("click", () => {
        res.innerHTML = e.innerHTML;
        arr.push(res.innerHTML)
        res.innerHTML = arr.join("");
    })
});

calc.addEventListener("click", () => {
    res.innerHTML = eval(res.innerHTML)
    arr = [eval(res.innerHTML)]
})

del.addEventListener("click", () => {
    arr.pop();
    res.innerHTML = arr.join("");
    if (res.innerHTML === "") {
        res.innerHTML = "0";
    }
});


reset.addEventListener("click", () => {
        arr = []
        res.innerHTML = "0";
});