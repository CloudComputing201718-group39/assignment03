module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product_name,cmd:Name', getProductName);
    this.add('role:product_price,cmd:Price', getProductPrice);
    this.add('role:product_price,cmd:Price', getProductPrice);
    this.add('role:product_price,cmd:Price', getProductPrice);


    //To DO: add the pattern functions and describe the logic inside the function
    function getProductName(msg, respond) {
        if(msg.productId){
            var res = "Name "+ mockData.product_name;
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }

    function getProductPrice(msg, respond) {
        if(msg.productId){
            var res = "Price " + msg.productId;
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }



}
