/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_descp_service.host, port: config.product_descp_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const get_ProductURL = { role: 'product_descp', cmd: 'URL' };
const get_ProductName = { role: 'product_descp', cmd: 'name' };

/**
 * Call Service Method
 */
const getProductURL = (productId) => {
    /**
     * To DO: Write act Method
     */
     return act(Object.assign({}, get_ProductURL, { productId }));
};
const getProductName = (productId) => {
    /**
     * To DO: Write act Method*/
      return act(Object.assign({}, get_ProductName, { productId }));
};
module.exports = {
    getProductURL,
    getProductName
};
