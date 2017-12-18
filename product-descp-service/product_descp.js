/**
 * This service returns based on the productid the product name and the URL.
 * 
 */
module.exports = function (options) {
    // Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    // TODO: Add the patterns and their corresponding functions
    this.add({role:'product_descp', cmd:'productname'}, getProductName);
    this.add({role:'product_descp', cmd:'producturl'}, getProductURL);

    // TODO: add the pattern functions and describe the logic inside the function
    function getProductName(msg, respond) {
        if (msg.productID) {
            for (i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id === parseInt(msg.productId)) {
                    respond(null, { productName: mockData[i].product_name });
                }
            }
        }
        else {
            respond(null, { productName: ''});
        }
    }

    function getProductURL(msg, respond) {
        if (msg.productID) {
            for (i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id === parseInt(msg.productId)) {
                    respond(null, { productURL: mockData[i].product_url });
                }
            }
        }
        else {
            respond(null, { productURL: ''});
        }
    }

    // this.act({role: 'product_descp', cmd: 'productname', product_id: '1'}, console.log);
};