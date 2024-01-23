// window.addEventListener("load", function () {
//   var preloader = document.getElementById("preloader");
//   preloader.style.display = "none";
// });

// document.querySelectorAll(".page-link").forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     var preloader = document.getElementById("preloader");
//     preloader.style.display = "block";

//     var url = this.getAttribute("href");
//     setTimeout(function () {
//       window.location.href = url;
//     }, 1500);
//   });
// });
$("body").append(
  '<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight
  });
}
