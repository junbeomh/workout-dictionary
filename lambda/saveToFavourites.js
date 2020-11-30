var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users";

exports.handler = (event, context, callback) => {
    console.log("event: " + JSON.stringify(event));
    console.log("uid: " + event.uid);
    console.log("name: " + event.name);
    console.log("type: " + event.type);
    console.log("description: " + event.description);

    var params = {
        TableName: tableName,
        Key: {
            "uid": event.uid,
        },
        UpdateExpression: "SET #attrName = list_append(#attrName, :attrValue)",
        ExpressionAttributeNames: {
            "#attrName": "favourites",
        },
        ExpressionAttributeValues: {
            ":attrValue": [{
                "name": `${event.name}`,
                "type": `${event.type}`,
                "description": `${event.description}`,
            }]
        },
        ReturnValues: "ALL_NEW"
    };


    docClient.update(params).promise()
            .then(response => {
            let res = {
                "headers": {
                    "Content-Type": "application/json",
                     "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                    "Access-Control-Allow-Methods" : "PUT", // Required for cookies, authorization headers with HTTPS 
                }
            };
            res.statusCode = 200;
            res.body = "success";
            console.log(res);
            callback(null, JSON.parse(JSON.stringify(res)))
        })
        .catch(err => {
            console.log(err);
        })
};
