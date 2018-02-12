import {getCoinList, harvestCoin} from "./harvest";

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database name
const dbName = 'hodl-backtesting';

async function storeCoinList(db) {
    let coinList = await getCoinList();
    console.log(coinList)
    return await db.collection('coinList').insertOne(coinList);
}
async function storeHarvested(db) {
    let btc = await harvestCoin('BTC', new Date(2017,11,22), new Date(2017,12,20))
    return await db.collection('testHarvest').insertOne({BTC: btc});
}

(async function() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        await storeHarvested(db)
        // Insert a single document
        // let r = await storeCoinList(db)
        // assert.equal(1, r.insertedCount);

        // Insert multiple documents
        // var r = await db.collection('inserts').insertMany([{a:2}, {a:3}]);
        // assert.equal(2, r.insertedCount);

        // Close connection
        client.close();
    } catch(err) {
        console.log(err.stack);
    }
})();
