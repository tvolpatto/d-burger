const orm = require("../config/orm");

const TABLE_NAME = "burgers";

module.exports = {
    selectAll : function() {
       orm.selectAll(TABLE_NAME, (result) => {
           console.log(result);
       });
    },
    insert : function(newBurger) {
        orm.insertInto(TABLE_NAME, newBurger, (result)=>{
            console.log(result);
        });
    }
};
