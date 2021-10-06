// // let date = new Date;

// // console.log(date.getFullYear());
// var today = new Date();
// var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
// console.log(lastDayOfMonth);
// console.log(lastDayOfMonth.getDate());



// let coba = today.getDate()

// console.log(hasil);

// console.log(coba);

// let date = new Date();

// let tahun = new Date(date.getFullYear(), date.getMonth(), date.getDate());
// let tahun1 = date.getFullYear();
// let bulan = new Date().getMonth();
// let tanggal = date.getDate();

// console.log(tanggal,'-',bulan,'-',tahun1);
// console.log(new Date().getMonth());

// let hasil = tanggal, bulan, tahun



// console.log(tanggal, bulan, tahun);

// let today = new Date;

// let akhir_bulan =  new Date(today.getFullYear(), today.getMonth(), 28, 07);

// // console.log(akhir_bulan);

const moment = require('moment');
const cron = require('node-cron');

// function getMonthDateRange(year, month) {
//     // var moment = require('moment');


//     var startDate = moment([year, month - 1]);
//     var endDate = moment(startDate).endOf('month');

    // just for demonstration:
//     console.log(startDate.toDate());
//     console.log(endDate.toDate());
//     // console.log(endDate.g);

//     // make sure to call toDate() for plain JavaScript date type
//     return { start: startDate, end: endDate };
// }
cron.schedule('0 36 20 * * *', function(){

    let year = 2021
    
    let month = 08
    
    var startDate = moment([year, month -1, 06]);
    
    let a = moment().isSame(startDate, 'day')
    
    // console.log(a);
    if(a){
        console.log(`jalan`);
    }
});

// let data = [
//     {
//         "count": "1"
//     }
// ]

// console.log(data[0].count);