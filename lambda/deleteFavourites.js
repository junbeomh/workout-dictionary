var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users"

exports.handler = (event, context, callback) => {
    console.log(event.uid);
    console.log(event.index);
    let expression = "REMOVE favourites[" + event.index + "]";
    var params = {
        TableName: tableName,
        Key: {
            "uid": event.uid,
        },
        UpdateExpression: expression,
        ReturnValues:"UPDATED_NEW"

    };

    docClient.update(params, function(err, data){
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin" : "*" }
            });
        }
    })
};