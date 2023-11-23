const Sequelize = require('sequelize');
 // ✅ 모델 import
const Board = require('./board');              

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

// 모델 등록 및 설정
db.Board = Board;

Board.initiate(sequelize);

Board.associate(db);

module.exports = db;