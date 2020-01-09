if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function() {
        console.log("ServiceWorker has been registered!");
      })
      .catch(console.error);
  });
}