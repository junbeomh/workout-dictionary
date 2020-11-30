var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-excercises";

exports.handler = (event, context, callback) => {


    var params = {
        TableName: tableName,
        Item: event
    };

    docClient.put(params, function (err, data) {
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
