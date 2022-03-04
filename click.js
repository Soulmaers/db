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
// кнопки замер и продажи+радио кнопки, сохранение в локалстор и удаление
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
    order(0);
    fullM(0);
    fullS(0);
    aboxsbo(0);
    biodekasbo(0)
};

//радион-кнопки, логика выбора
let count1=count2=count3=count4=0;
        
        let radio = document.getElementsByName("dzen");
        btn.onclick = function displayRadioValue() {

            for (i = 0; i < radio.length; i++) {
                if (radio[i].checked && radio[i]===full)
                count1++;
                    full_view_montaj.textContent = count1;
                if (radio[i].checked && radio[i]===station)
                count2++;
                    station_view_montaj.textContent = count2;
                if (radio[i].checked && radio[i]===abox)
                count3++;
                aboxView.textContent = count3;
                if (radio[i].checked && radio[i]===biodeka)
                count4++;
                biodekaView.textContent = count4;   
            }
        };

        let fullM = (n) => localStorage.setItem('a', full_view_montaj.textContent = n || 0)
        fullM(localStorage.getItem('a'));
        btn.onclick = e => fullM(+full_view_montaj.textContent + 1);
        let fullS = (n) => localStorage.setItem('b', station_view_montaj.textContent = n || 0)
        fullS(localStorage.getItem('b'));
        btn.onclick = e => fullS(+station_view_montaj.textContent + 1);
        let aboxsbo = (n) => localStorage.setItem('d', aboxView.textContent = n || 0)
        aboxsbo(localStorage.getItem('d'));
        btn.onclick = e => aboxsbo(+aboxView.textContent + 1);
        let biodekasbo = (n) => localStorage.setItem('y', biodekaView.textContent = n || 0)
        biodekasbo(localStorage.getItem('y'));
        btn.onclick = e => biodekasbo(+biodekaView.textContent + 1);
