var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@cluster0.x6mkf.mongodb.net/test?retryWrites=true&w=majority';
    }
}