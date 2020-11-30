var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users"


exports.handler = (event, context, callback) => {
    console.log("uid: " + event.uid);
    var params = {
        TableName: tableName,
        Key: {
            "uid": event.uid,
        }
    };

    docClient.get(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
        }
    })
};
