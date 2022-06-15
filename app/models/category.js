module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

      
      
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
      
    });

    return category;
};