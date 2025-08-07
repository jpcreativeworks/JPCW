function playVideo(button) {
  const overlay = button.closest('.project-overlay');
  const video = overlay.previousElementSibling;
  overlay.style.display = "none";
  video.play();
}

function viewCatalog(button) {
  console.log("Catalog button clicked");
  const overlay = button.closest('.project-overlay');
  overlay.style.display = "none";
}