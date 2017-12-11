/**
 * This service returns based on the productid the product name and the URL.
 * 
 */
module.exports = function (options) {
    let seneca = this;

    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //TODO: Add the patterns and their corresponding functions
    seneca.add('role:product_descp,cmd:productid', (msg, reply) => {
        let res = $.grep(mockData, (entry) => {
            return entry.product_id === msg.product_id;
        });
        reply(null, {"product_id": res.product_id, "productURL": res.product_url});
    });

    //TODO: add the pattern functions and describe the logic inside the function
    seneca.act('role: product_descp cmd: productid product_id: 1', console.log);
}