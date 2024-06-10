var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
};

function setBestCustomer(){
    bestCustomer = 'not bob';
    console.log(bestCustomer);
    return bestCustomer;
};
setBestCustomer();

var bestCustomer = undefined;
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
};

const leastFavoriteCustomer = 'joe';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'moe';
};
changeLeastFavoriteCustomer(); 


