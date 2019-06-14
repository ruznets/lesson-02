function formDate() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    return year + "." + month + "." + date + ", " + hours + ":" + minutes + ":" + seconds;
}

function date(x) {
    var a = Number.isNaN(x) ? "Неверный тип данных" : formDate(); // построение даты происходит только при вводе числа
    return a
}
date("23")