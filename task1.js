var n;
n = 4;
var s;
s = 'hi';
var b;
b = true;
var arr;
arr = [1, 2, 3];
var ts;
ts = ['hi', 'hello'];
var tn;
tn = [1, 2, 3];
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
;
console.log(n, s, b, arr, ts, tn, days);
