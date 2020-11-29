// dynamodb_start.js
var AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-west-2',
    endpoint: "http://dynamodb.us-west-2.amazonaws.com"
})
const dynamodb = new AWS.DynamoDB()
const tableName = "workout-dictionary-excercises"

const params = {
    TableName: tableName,
    KeySchema: [
        { AttributeName: "type", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "type", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}

exports.handler = (event, context, callback) => {
    dynamodb.createTable(params).promise()
        .then(req => {
            console.log(req)
        })
        .catch(err => {
            console.log(err)
        })

};