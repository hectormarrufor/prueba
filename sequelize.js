const { Sequelize , DataTypes, Op} = require('sequelize');

export const sequelize = new Sequelize('postgres://postgres:1234@172.20.0.2:5432/prueba',{
    define: {
      freezeTableName: true, //to avoid pluralization of postgres tables
      logging:false, //to avoid the constant logging when starting sequelize
    }
});




//DEFINING MODELS/TABLES IN DATABASE:
export const dog = sequelize.define('dog', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '/*you default value here*/'
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  // `sequelize.define` also returns the model



dog.create({firstName: 'firulais', lastName: 'goitia'});
//MODEL SYNCHRONIZATION:

sequelize.sync();
//ONE BY ONE: 

//ALL MODELS AT ONCE:



//CREATING INSTANCE OF User IN DATABASE:
// const jane = await User.create({name: 'Jane'});
// console.log(jane instanceof User); //true
// console.log(jane.name); // 'Jane'


//TO LOG INSTANCES: console.log(jane.toJSON()) or console.log(JSON.stringify(jane, null, 4))


//UPDATING INSTANCE:
/*jane.name = 'Ada'; or
jane.set({
    name: 'Ada',
    favoriteColor: 'blue'
});*/

//await jane.save() to update on DB


//DELETE INSTANCE:
//await jane.destroy();

//RELOADING INSTANCE (UPDATE DATA FROM DATABASE TO MODEL IN JS:
//await jane.reload();


//incrementing or decrementing values
//await jane.increment('age', {by: 1});


//MODEL QUERYING:
//methods of Model:
//Model.findAll({ attributes: ['name', 'lastName',]});
//sequelize.fn to do agregations: attributes: ['name', [sequelize.fn('COUNT', sequelize.col('maria')), 'n_hats']];
//Model.findAll({where: { [Op.or (and by default)]: [{authorId : 12}, { status : 'active' } ] });