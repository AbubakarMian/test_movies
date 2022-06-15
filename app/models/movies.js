module.exports = (sequelize, DataTypes) => {
    const movies = sequelize.define("movies", {
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
        release_date: {
            type: DataTypes.DATE
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        duration: {
            type: DataTypes.TIME
        },
        rating: {
            type: DataTypes.FLOAT
        },
     
      
    });

    return movies;
};