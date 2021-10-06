const express = require('express');
const app = express();
const port = 3000;
let bodyParser = require('body-parser');
let bagian = require('./router/bagian');
const subBagian = require('./router/sub_bagian');
const user = require('./router/user');
const login = require('./router/login');
const tunjangan = require('./router/tunjangan');
const middleware = require('./middleware/aut');
const absensi = require('./router/absensi');
const manager = require('./router/manager');
const gaji = require('./router/gaji');
const moment = require('moment');
const cgaji = require('./controller/gaji')

const cron = require('node-cron');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/image', express.static('image'));

app.use('/login', login);
app.use('/bagian', middleware.manager, bagian);
app.use('/subBagian', middleware.manager, subBagian);
app.use('/user', middleware.manager, user);
app.use('/tunjangan', middleware.manager, tunjangan);
app.use('/absensi', middleware.data, absensi);
app.use('/manager',middleware.manager, manager);
app.use('/gaji', gaji);

app.get('/', cgaji.create);

cron.schedule('0 54 17 * * *', function(){
    // console.log(`cron jalan`);
    // let date = new Date;
    // let year = date.getFullYear();
    // let month = date.getMonth();

    let year = 2021;
    let month = 08;
    
    let startDate = moment([year, month - 1, 11]);
    let endDate = moment(startDate).endOf('month');
    // console.log(startDate);

    let a = moment().isSame(startDate, 'day');
    
    if(a){
        console.log(`moment => jalan`);
        cgaji.create();
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`) );