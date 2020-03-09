dbPassword =
  "mongodb://emad:emad@cluster0-shard-00-00-cguh9.mongodb.net:27017,cluster0-shard-00-01-cguh9.mongodb.net:27017,cluster0-shard-00-02-cguh9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports = {
  mongoURI: dbPassword
};
