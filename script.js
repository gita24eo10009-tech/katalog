
const clickSound = document.getElementById("clickSound");


function playClick() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }
}

function startAR() {
  playClick();

  setTimeout(() => {
    window.location.href = "ar.html"; 
  }, 200);
}

function openAR(model) {
  playClick();

  const encodedModel = encodeURIComponent(model);

  setTimeout(() => {
    window.location.href = "ar.html?model=" + encodedModel; 
  }, 200);
}

window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "0.5s";

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});