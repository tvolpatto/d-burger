const orm = require("../config/orm");

modules.export = {
    selectAll = function() {
       orm.selectAll("burgers", (data) => {
           console.log(data);
       });
    }
};
