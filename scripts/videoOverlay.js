function playVideo(button) {
  const overlay = button.closest('.project-overlay');
  const video = overlay.previousElementSibling;
  overlay.style.display = "none";
  video.play();
}
