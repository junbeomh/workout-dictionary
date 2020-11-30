var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users"


exports.handler = (event, context, callback) => {
    var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*",
            "Access-Control-Allow-Origin": "*",
            }
        };
        
    console.log("uid: " + event.uid);

    var params = {
        TableName: tableName,
        Key: {
            "uid": event.uid,
        }
    };


    docClient.get(params, function(err, data){
        if (err) {
            callback(err, null);
        }else{
            callback(null, data)
        }
    })
};
