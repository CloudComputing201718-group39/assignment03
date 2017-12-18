/**
 * This service returns based on the productid the product price.
 *
 */
module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    // Todo: Add the patterns and their corresponding functions
    this.add('role:product_price, cmd:productprice', getProductPrice);

    // Todo: add the pattern functions and describe the logic inside the function
    function getProductPrice(msg, respond) {
        if (msg.productID) {
            for (i = 0; i < mockData.length; i++) {
                if (mockData[i].product_id === parseInt(msg.productId)) {
                    respond(null, { productPrice: mockData[i].product_price });
                }
            }
        }
        else {
            respond(null, { productPrice: ''});
        }
    }

}