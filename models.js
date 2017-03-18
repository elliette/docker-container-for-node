var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);


var Sandcastle = db.define('Sandcastle', {
  name: Sequelize.STRING
})


module.exports = {
    db: db,
    Sandcastle: Sandcastle
};