var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".button");
var modal = document.querySelector(".modal");
var disable_modal = document.querySelector(".modal__action--negative");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  mobileNav.style.transform = "translateX(-100%)";
  if (modal) {
    modal.style.display = "none";
  }
  // mobileNav.style.display = 'none';
});
if (disable_modal) {
  disable_modal.addEventListener("click", function () {
    backdrop.style.display = "none";
    modal.style.display = "none";
  });
}
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
  //  mobileNav.style.display = 'block';
  backdrop.style.display = "block";
  mobileNav.style.transform = "translateX(0)";
});
