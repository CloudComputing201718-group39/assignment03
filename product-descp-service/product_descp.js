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
        if (msg.productId) {
            let res = '';
            for (i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id === parseInt(msg.productId)) {
                    res = mockData[i].product_name;
                    break;
                }
            }
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }

    function getProductURL(msg, respond) {
        if (msg.productId) {
            let res = '';
            for (i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id === parseInt(msg.productId)) {
                    res = mockData[i].product_url;
                    break;
                }
            }
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }
};