/*window.onload = () => {

    count_order = localStorage.getItem("count_order")
        ? JSON.parse(localStorage.getItem("count_order")) : 0;
    view_order.textContent = count_order;
    count_sale = localStorage.getItem("count_sale") 
    ? JSON.parse(localStorage.getItem("count_sale")) : 0;
    view_sale.textContent = count_sale;

};



let link_order = document.getElementById("link_order");
let view_order = document.getElementById("view_order");
let count_order = 0;

link_order.onclick = function () {
    count_order++;
    view_order.textContent = count_order;
    localStorage.setItem("count_order", JSON.stringify(count_order));
};

let link_sale = document.getElementById("link_sale");
let view_sale = document.getElementById("view_sale");
let count_sale = 0;

link_sale.onclick = function () {
    count_sale++;
    view_sale.textContent = count_sale;
    localStorage.setItem("count_sale", JSON.stringify(count_sale));
};

let link_clear = document.getElementById("link_clear");
link_clear.onclick = function () {
    count_clear = 0;
    view_sale.textContent = count_clear;
    view_order.textContent = count_clear;
    localStorage.setItem("count_clear", JSON.stringify(count_clear));

};*/

let order = (n) => localStorage.setItem('c', view_order.textContent = n || 0)
order(localStorage.getItem('c'));
link_order.onclick = e => order(+view_order.textContent + 1)


let sale = function (n) {
    localStorage.setItem('j', view_sale.textContent = n || 0)
};
sale(localStorage.getItem('j'));

link_sale.onclick = function (i) {
    sale(+view_sale.textContent + 1)
}
link_clear.onclick = function (i) {
    sale(0);
    order(0)
};
