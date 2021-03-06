console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(event, ctx, callback) {
  let scanningParameters = {
    TableName: 'guestbook',
    Limit: 100
  };
  docClient.scan(scanningParameters, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });

  /*let params = {
    TableName: 'guestbook',
    Key: {
      date: 138369387498734
    }
  }
  docClient.get(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });*/
}