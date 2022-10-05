function sum(a, b) {
    return a + b;
}
function dec(a, b) {
    return a - b;
}
function calc(a, b, operator) {
    switch (operator) {
        case "+":
            alert(sum(a,b))
            break;
        case "-":
            alert(dec(a, b));
            break;
        default:
            alert(a);
            break;
    }
}
let balans = 500;
alert("Balansa medaxil ucun +  balansdan mexaric ucun  -  daxil edin");
let processing = prompt();
if (processing==="+"||processing==="-") {
    alert("Mebleg daxil edin");
    let addFounds =Number( prompt());
    calc(balans,addFounds,processing);
}
else{
    alert(balans);
}
