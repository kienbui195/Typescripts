// Dau so Viettel: 086,096,097,098;
// Dau so Vinaphone: 088, 091, 094;
// Dau so Mobiphone: 089, 090, 093
var numbers = ['086839840', '08834252342', '0913234534', '0892352354', '0903523423', '0973423234', '0934523435', '0983242235'];
var headNumberViettel = ['086', '096', '097', '098'];
var headNumberVinaphone = ['088', '091', '094'];
var headNumberMobiphone = ['089', '090', '093'];
var categorizeNumber = function (numbers) {
    var arrViettel = [];
    var arrVinaphone = [];
    var arrMobiphone = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var item = numbers_1[_i];
        if (item.substring(0, 3) === '086' || item.substring(0, 3) === '096' || item.substring(0, 3) === '097' || item.substring(0, 3) === '098') {
            arrViettel.push(item);
        }
        else if (item.substring(0, 3) === '088' || item.substring(0, 3) === '091' || item.substring(0, 3) === '094') {
            arrVinaphone.push(item);
        }
        else if (item.substring(0, 3) === '089' || item.substring(0, 3) === '090' || item.substring(0, 3) === '093') {
            arrMobiphone.push(item);
        }
    }
    console.log("Cac so Viettel [".concat(arrViettel, "]"));
    console.log("Cac so Vinaphone [".concat(arrVinaphone, "]"));
    console.log("Cac so Mobiphone [".concat(arrMobiphone, "]"));
};
categorizeNumber(numbers);
