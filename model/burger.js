const orm = require("../config/orm");

module.exports = {
    selectAll : function() {
       orm.selectAll("burgers", (data) => {
           console.log(data);
       });
    }
};
