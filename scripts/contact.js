function showThankYou() {
  setTimeout(function () {
    document.getElementById("thankYouAlert").classList.remove("d-none");
    document.querySelector("form").reset(); 
  }, 500);
}