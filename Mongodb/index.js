var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Easmin:sep169117@cluster0.auvgd.mongodb.net/school?retryWrites=true&w=majority";
 
var config = {useUnifiedTopology: true };

MongoClient.connect(url,config, function(error,MyMongoClinet){
    if(error){
        console.log("Connection Fail");
    }else{
        console.log("connection Success");
        InsertData(MyMongoClinet);
    }
});

//Data insert
function InsertData(MyMongoClinet){
    var MyDataBase = MyMongoClinet.db("school");
    var MyCollection = MyDataBase.collection('students');

    var MyData ={name:"Kolpona", Roll:"04",Class:"Seven", City:"Dhaka"};
    MyCollection.insertOne(MyData, function(error){
        if(error){
            console.log("Data Insert Fail");
        }else{
            console.log("Data Insert Success");
        }
    })
}
