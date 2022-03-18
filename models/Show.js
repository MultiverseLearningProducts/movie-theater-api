//import our db, Model, DataTypes
const { db, DataTypes, Model } = require('../db')

//Creating a User child class from the Model parent class
class Show extends Model {

}

Show.init({

    title: DataTypes.STRING,
    genre: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,

    }, {
        sequelize: db
})

//exports
module.exports = { Show }
