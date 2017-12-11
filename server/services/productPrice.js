/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_price_service.host, port: config.product_price_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const get_ProductPrice = { role: 'product_price', cmd: 'Price' };
/**
 * To DO: Call Service Method
 */

const getProductPrice = (productId) => {
    /**
     * To DO: Write act Method
     */
     return act(Object.assign({}, get_ProductPrice, {productId}));
};
module.exports = {
    getProductPrice
};
