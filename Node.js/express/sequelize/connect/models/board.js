const { DataTypes, Model, Sequelize } = require('sequelize');

class Board extends Model {
  static initiate(sequelize) {
    Board.init(
      {
        board_no: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        writer: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        reg_date: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
        upd_date: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        modelName: 'Board',
        tableName: 'board',
        timestamps: false,
      }
    );
  }

  static associate(db) {
    // Add associations if needed
  }
}

module.exports = Board;