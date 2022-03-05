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
    biodekasbo(0);
    optimasbo(0);
    evrolossbo(0);
    astrasbo(0);
    topassbo(0);
    tversbo(0);
    genezissbo(0);
    evrobionsbo(0);
    othersbo(0);
    addSalessbo(0);
    spbRegion(0);
    mskRegion(0);
};

let fullM = (n) => localStorage.setItem('a', full_view_montaj.textContent = n || 0)
fullM(localStorage.getItem('a'));
let mtView = (e) => fullM(+full_view_montaj.textContent + 1);
let fullS = (n) => localStorage.setItem('b', station_view_montaj.textContent = n || 0)
fullS(localStorage.getItem('b'));
let stView = (e) => fullS(+station_view_montaj.textContent + 1);
let aboxsbo = (n) => localStorage.setItem('d', aboxView.textContent = n || 0)
aboxsbo(localStorage.getItem('d'));
let arboxView = e => aboxsbo(+aboxView.textContent + 1);
let biodekasbo = (n) => localStorage.setItem('y', biodekaView.textContent = n || 0)
biodekasbo(localStorage.getItem('y'));
let bdView = e => biodekasbo(+biodekaView.textContent + 1);
let optimasbo = (n) => localStorage.setItem('r', optimaView.textContent = n || 0)
optimasbo(localStorage.getItem('r'));
let oView = e => optimasbo(+optimaView.textContent + 1);
let evrolossbo = (n) => localStorage.setItem('w', evrolosView.textContent = n || 0)
evrolossbo(localStorage.getItem('w'));
let evView = e => evrolossbo(+evrolosView.textContent + 1);
let astrasbo = (n) => localStorage.setItem('m', astraView.textContent = n || 0)
astrasbo(localStorage.getItem('m'));
let asView = e => astrasbo(+astraView.textContent + 1);
let topassbo = (n) => localStorage.setItem('l', topasView.textContent = n || 0)
topassbo(localStorage.getItem('l'));
let tView = e => topassbo(+topasView.textContent + 1);
let tversbo = (n) => localStorage.setItem('u', tverView.textContent = n || 0)
tversbo(localStorage.getItem('u'));
let tvView = e => tversbo(+tverView.textContent + 1);
let genezissbo = (n) => localStorage.setItem('p', genezisView.textContent = n || 0)
genezissbo(localStorage.getItem('p'));
let genView = e => genezissbo(+genezisView.textContent + 1);
let evrobionsbo = (n) => localStorage.setItem('z', evrobionView.textContent = n || 0)
evrobionsbo(localStorage.getItem('z'));
let bionView = e => evrobionsbo(+evrobionView.textContent + 1);
let othersbo = (n) => localStorage.setItem('f', otherView.textContent = n || 0)
othersbo(localStorage.getItem('f'));
let othView = e => othersbo(+otherView.textContent + 1);
let addSalessbo = (n) => localStorage.setItem('g', addSalesView.textContent = n || 0)
addSalessbo(localStorage.getItem('g'));
let addSView = e => addSalessbo(+addSalesView.textContent + 1);
let spbRegion = (n) => localStorage.setItem('spb', spbView.textContent = n || 0)
spbRegion(localStorage.getItem('spb'));
let spbV = e => spbRegion(+spbView.textContent + 1);
let mskRegion = (n) => localStorage.setItem('msk', mskView.textContent = n || 0)
mskRegion(localStorage.getItem('msk'));
let mskV = e => mskRegion(+mskView.textContent + 1);

//радион-кнопки, логика выбора
let radio = document.getElementsByName("dzen");
btn.onclick = function displayRadioValue() {
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked && radio[i] === full)
            mtView();
        if (radio[i].checked && radio[i] === station)
            stView();
        if (radio[i].checked && radio[i] === abox)
            arboxView();
        if (radio[i].checked && radio[i] === biodeka)
            bdView();
        if (radio[i].checked && radio[i] === optima)
            oView();
        if (radio[i].checked && radio[i] === evrolos)
            evView();
        if (radio[i].checked && radio[i] === astra)
            asView();
        if (radio[i].checked && radio[i] === topas)
            tView();
        if (radio[i].checked && radio[i] === tver)
            tvView();
        if (radio[i].checked && radio[i] === genezis)
            genView();
        if (radio[i].checked && radio[i] === evrobion)
            bionView();
        if (radio[i].checked && radio[i] === other)
            othView();
        if (radio[i].checked && radio[i] === addSales)
            addSView();
        if (radio[i].checked && radio[i] === regionSPB)
            spbV();
        if (radio[i].checked && radio[i] === regionMSK)
            mskV();

    }
};

