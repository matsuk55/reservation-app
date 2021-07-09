if (process.env.NODDE_ENV ==='production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}