// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person';

}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  bestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};