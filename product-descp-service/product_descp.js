/**
 * This service returns based on the productid the product name and the URL.
 * 
 */
module.exports = function (options) {
    var seneca = this;
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //TODO: Add the patterns and their corresponding functions
    seneca.add('role:product_descp,cmd:productid', (msg, reply) => {
        var res = $.grep(mockData, (entry) => {
            return entry.product_id == msg.product_id;
        });
        reply(null, {"product_id": res.product_id, "productURL": res.product_url});
    })

    //TODO: add the pattern functions and describe the logic inside the function
    seneca.act({role: 'product_descp', cmd: 'productid'}, () => {

    })

    function find_productid () {

    }
}