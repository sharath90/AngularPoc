
//Devices factory - Return list of device JSON objects

app.factory('DevicesFactory', function(){

    var devices = [
        {
            'name' : 'Sharath iPod',
            'deviceType' : 'Apple'
        },
        {
            'name' : 'Johns iPhone',
            'deviceType' : 'Apple'
        }
    ];
    var deviceFactory = {};


    deviceFactory.getDevices = function (){
        return devices;
    };

    return deviceFactory;

});

app.factory('CustomersFactory',['$http', function($http){

    var customers = [];

    $http.get("http://www.w3schools.com/website/Customers_JSON.php")
    .success(function(response) {customers = response;});

    var customerFactory = {};


    customerFactory.getCustomers = function (){
        return customers;
    };
    console.log('Customers in factory'+customers);
    return customerFactory;

}]);