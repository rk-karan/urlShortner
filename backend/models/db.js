// We use Sequelize ORM
const Sequelize = require('sequelize');

// Database url
const database = "postgres://ohkbdxlw:rKG5GQD2T6_YkB7IK8PutQadrsXpkkT4@john.db.elephantsql.com/ohkbdxlw";

// db instance
const db = new Sequelize(database);


module.exports = {
    db
}