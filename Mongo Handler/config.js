const { MongoClient, ServerApiVersion } = require('mongodb');
const url = 'mongodb+srv://Dostel:dostel123@dostel.opowh3w.mongodb.net/Karyana?retryWrites=true&w=majority';
const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
const database = 'Karyana';

const ConnectDB = async() =>{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Products');
}

module.exports = ConnectDB;