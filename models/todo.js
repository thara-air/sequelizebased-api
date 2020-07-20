module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      } ,
    
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      }
  ,
    
      dob: {
        type: DataTypes.DATE,
        allowNull: false
      }
    ,
    
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    ,
    
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    
   },
    
    {
      paranoid:true
    }
    );


    return Todo;
  };
  /*,
    },*/