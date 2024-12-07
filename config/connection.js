const mongoose = require('mongoose')

const connection_string = process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MongDB Atlas connected successfully with test_server");
}).catch(err=>{
    console.log("fail");
    console.log(err);
})