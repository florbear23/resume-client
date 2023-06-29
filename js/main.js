var modal = document.getElementById("modal");
var modalImage = document.getElementById("modalImage");
var modalImages = document.getElementsByClassName("modal-image");
var closeBtn = document.getElementsByClassName("close")[0];

function openModal(image) {
  modal.style.display = "block";
  modalImage.src = image.src;
}

function closeModal() {
  modal.style.display = "none";
}

for (var i = 0; i < modalImages.length; i++) {
  modalImages[i].addEventListener("click", function() {
    openModal(this);
  });
}

closeBtn.addEventListener("click", function() {
  closeModal();
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
