var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users"

exports.handler = (event, context, callback) => {

    var params = {
        TableName: tableName,
        Key: {
            "uid": event.uid,
        },
        UpdateExpression: "REMOVE favourites[0]",
        ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(err, data){
        if(err) {
            console.error("Unable to delete item.");
        } else {
            console.log("Deleted Item");
        }
    })
};