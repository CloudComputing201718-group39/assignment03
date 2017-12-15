/**
 * This service returns based on the productid the product name and the URL.
 * 
 */
module.exports = function (options) {
    // Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    // let find = function (id) {
    //     for (i = 0; i < mockData.length; i++) {
    //         if (mockData[i].product_id === id)
    //             return mockData[i];
    //     }
    // };

    // TODO: Add the patterns and their corresponding functions
    this
        .add(
            {role:'product_descp', cmd:'productname'},
            (msg, respond) => {
                for (i = 0; i < mockData.length; i++) {
                    if (mockData[i].product_id === parseInt(msg.product_id)) {
                        respond(null, {productName: mockData[i].product_name}); // TODO: Fix this 'cannot read property 'product_id' of undefined'
                    }
                }
            }
         );

    this
        .add(
            {role:'product_descp', cmd:'producturl'},
            (msg, respond) => {
                for (i = 0; i < mockData.length; i++) {
                    if (mockData[i].product_id === parseInt(msg.product_id)) {
                        respond(null, {productName: mockData[i].product_url}); // TODO: Fix this 'cannot read property 'product_id' of undefined'
                    }
                }
            }
        );

    // this.add({role:'product_descp', cmd:'producturl'}, (msg, reply) => {
    //     var result = find(mockData, (x) => {
    //         return x.product_id === msg.product_id
    //     });
    //
    //     reply(null, {product_URL: result.product_url})
    // });

    // TODO: add the pattern functions and describe the logic inside the function
    this.act({role: 'product_descp', cmd: 'productname', product_id: '1'}, console.log);
};