document.getElementById("submit").addEventListener("click", function() {
  submitRating();
  document.querySelector('form').reset();
});

function submitRating() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification("Thank You for Rating!");
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Thank You for Rating!");
      }
    });
  }
}
