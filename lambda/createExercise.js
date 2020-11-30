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

    docClient.put(params).promise()
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
};
