const mongoose=require('mongoose');

const dbString="mongodb+srv://tcl:tcl@cluster0.wtowq1n.mongodb.net/tclData";
//mongodb+srv://tcl:<password>@cluster0.wtowq1n.mongodb.net/




mongoose.connect(dbString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connected to  mongo !")).catch((error)=> console.log(error.message));