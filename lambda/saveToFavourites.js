var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "workout-dictionary-users"

// var params = {
//     TableName: tableName
// };

var favouriteToAdd = {
    type: "TEST",
    name: "TEST",
    description: "TEST",
}




exports.handler = (event, context, callback) => {
    var caseId = "1734009";
    var chatMessage = {
        "2018-04-20T15:02:48Z":
        {
            "userId": "wQnUJrklzwWBDOsx83XVETSS7us2",
            "message": "How are you"
        }
    }

    // const params = {
    //     TableName: 'insiders',
    //     Key: {
    //         "uuid": event.uuid,
    //     },
    //     UpdateExpression: "SET #attrName = list_append(#attrName, :attrValue)",
    //     ExpressionAttributeNames: {
    //         "#attrName": "recommendations",
    //     },
    //     ExpressionAttributeValues: {
    //         ":attrValue": [{
    //             "uuid": `ir_${uuidv4()}`,
    //             "recommendation": event.recommendation
    //         }]
    //     },
    //     ReturnValues: "ALL_NEW"
    // }; Ï

    var params = {
        TableName: tableName,
        Key: {
            "uid": 'e4aa65ca-6d05-4eef-98b9-08d71c7720f2',
        },
        UpdateExpression: "SET #attrName = list_append(#attrName, :attrValue)",
        ExpressionAttributeNames: {
            "#attrName": "favourites",
        },
        ExpressionAttributeValues: {
            ":attrValue": [{
                "name": `${favouriteToAdd.name}`,
                "type": `${favouriteToAdd.type}`,
                "description": `${favouriteToAdd.description}`,
            }]
        },
        ReturnValues: "ALL_NEW"
    };


    docClient.update(params, function (err, data) {
        if (err) console.log(err);
        else console.log(data);
    })


};
