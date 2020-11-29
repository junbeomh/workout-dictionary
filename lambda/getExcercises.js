var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-excercises"

var params = {
    TableName: tableName
};
var count = 0;


exports.handler = (event, context, callback) => {
    var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*",
            "Access-Control-Allow-Origin": "*",
            }
        };

    docClient.scan(params).eachPage((err, data, done) => {
        if (err) return;
        if (data != null) {
            for (let index = 0; index < data.Items.length; index++) {
                const element = data.Items[index];
                count++;
                console.log("TOTAL::> " + count + " ITEM::> " + index + " DATA:: " + JSON.stringify(element));
                res.body = data;
                console.log(JSON.stringify(data));
                callback(null, JSON.parse((JSON.stringify(res, null, 2))))
            }
        }
        done();
    });
};
