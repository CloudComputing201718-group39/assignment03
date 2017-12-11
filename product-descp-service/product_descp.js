module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
    this.add('role:product_descp,cmd:URL', getProductURL);
    this.add('role:product_descp,cmd:name', getProductName);

    //To DO: add the pattern functions and describe the logic inside the function
    function getProductURL(msg, respond) {
        if(msg.productId){
            var res = "URL "+msg.productId;
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }
      function getProductName(msg, respond) {
        if(msg.productId){
            var res = "name "+msg.productId;
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }
    
}


