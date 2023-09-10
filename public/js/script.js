//Start uploading files button
document.getElementById("uploadButton").addEventListener("click", () => {
  window.location.href = "https://gitcdn.repl.co/login";
});

//Make it mobile friendly
let openNavBarButton = document.getElementById("linksButton");
let navBar = document.getElementById("navbar");
openNavBarButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
});
