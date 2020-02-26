const orm = require("../config/orm");

const TABLE_NAME = "burgers";

module.exports = {
    selectAll : function(callback) {
       orm.selectAll(TABLE_NAME, (result) => {
           result.map(r => {
               if (r.devoured === 1){
                   r.devoured = true;
               } else {
                   r.devoured = false;
               }
           })
           callback(result);
       });
    },

    insert : function(newBurger, callback) {
        orm.insertInto(TABLE_NAME, newBurger, (result)=>{
            callback(result);
        });
    },

    devour : function(burgerId, callback) {
        const fields = {
            set: {
                name:"devoured",
                value : true
            }, 
            where:{
                name: "id",
                value : burgerId
            } 
        };
        
        orm.updateOne(TABLE_NAME, fields, (result) =>{
            callback(result);
        }); 
    }
};
