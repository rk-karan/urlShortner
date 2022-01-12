// We use Sequelize ORM
const { Sequelize, DataTypes } = require('sequelize');

// Database url
const database = "postgres://ohkbdxlw:rKG5GQD2T6_YkB7IK8PutQadrsXpkkT4@john.db.elephantsql.com/ohkbdxlw";

// db instance
const db = new Sequelize(database);

const URLs = db.define('urls', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    code: {
        type: DataTypes.STRING(7),
        unique: true
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = {
    db,
    URLs
}