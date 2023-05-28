const {constants} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Failed", 
                      message: err.message, 
                      stackTrace: err.stack
                    });
         break;
        case constants.NOT_FOUND:
            res.json({title: "Not found", 
                      message: err.message, 
                      stackTrace: err.stack
                    });
         break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden request", 
                      message: err.message, 
                      stackTrace: err.stack
                    });
         break;
         case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized request", 
                      message: err.message, 
                      stackTrace: err.stack
                    });
         break;
         case constants.SERVER_ERROR:
            res.json({title: "Server error", 
                      message: err.message, 
                      stackTrace: err.stack
                    });
         break;
         default:
            console.log("Everything it's fine, keep going.")
            break;


        

    }

};

module.exports = errorHandler;