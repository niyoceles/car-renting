/* eslint-disable no-restricted-globals */
// const BASE_URL = "https://api.bookme.rw/api/v1"
const BASE_URL = "https://api.godiscoverafrica.rw/api"
const successData = {status: "PAID"};

function errorCallback(error) {
  alert("Error happened while paying! Try again.", error);
}

function cancelCallback() {
  confirm(`Are you sure you want to cancel?`);

  if(localStorage.getItem('bookingID')){
    localStorage.removeItem('bookingID')
  }
}

function completeCallback(resultIndicator,sessionVersion) {
  // fetch(`${BASE_URL}/bookings/${localStorage.getItem('bookingID')}`, {
  fetch(`${BASE_URL}/order/${localStorage.getItem('bookingID')}`, {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      status:'PAID',
      email:localStorage.getItem('bookingEmail')
    })
  }).then((res)=> {
    alert("Payment completed! Thank you for booking with GoDiscoverAfrica.");
  }).catch((_)=>{
    alert("Payment failed! Try again")
  });
  localStorage.removeItem('bookingID')
}