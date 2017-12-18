/**
 * Import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');

/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_descp_service.host, port: config.product_descp_service.port }).act, { context: seneca });

/**
 * Define Service Method
 */
const GET_PRODUCT_NAME = { role:'product_descp', cmd:'productname' };
const GET_PRODUCT_URL = { role:'product_descp', cmd:'producturl' };

/**
 * Call Service Method
 */
const getProductURL = (productId) => {
    return act(Object.assign({}, GET_PRODUCT_URL, { productID }));
};
const getProductName = (productId) => {
    return act(Object.assign({}, GET_PRODUCT_NAME, { productID }));
};

module.exports = {
    getProductURL,
    getProductName
};
