const nums = document.querySelectorAll(".parent .skle span:not(:nth-child(4))");
const res = document.querySelector(".parent .res span");
const reset = document.querySelector(".parent .P-skle .buttons button:first-child");
const calc = document.querySelector(".parent .P-skle .buttons button:last-child");
const del = document.querySelector(".parent .skle").children[3];


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
    arr = arr.join('').split('')
    console.log(arr);
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
