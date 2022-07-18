// Dau so Viettel: 086,096,097,098;
// Dau so Vinaphone: 088, 091, 094;
// Dau so Mobiphone: 089, 090, 093


let numbers = ['086839840','08834252342','0913234534','0892352354','0903523423','0973423234','0934523435','0983242235'];
let headNumberViettel = ['086','096','097','098'];
let headNumberVinaphone = ['088','091','094'];
let headNumberMobiphone = ['089','090','093'];


let categorizeNumber = (numbers: string[]) => {
    let arrViettel: string[] = [];
    let arrVinaphone: string[] = [];
    let arrMobiphone: string[] = [];
    for (const item of numbers) {
        if (item.substring(0,3) === '086' || item.substring(0,3) === '096' || item.substring(0,3) === '097' || item.substring(0,3) === '098') {
            arrViettel.push(item);        
        } else if (item.substring(0,3) === '088' || item.substring(0,3) === '091' || item.substring(0,3) === '094') {
            arrVinaphone.push(item);
        } else if (item.substring(0,3) === '089' || item.substring(0,3) === '090' || item.substring(0,3) === '093') {
            arrMobiphone.push(item);
        }
    }
    console.log(`Cac so Viettel [${arrViettel}]`);
    console.log(`Cac so Vinaphone [${arrVinaphone}]`);
    console.log(`Cac so Mobiphone [${arrMobiphone}]`);
    
}

categorizeNumber(numbers);
