var slotSlider = document.getElementById("items");
var rForm = document.getElementById("rar");
var rInput = document.getElementById("rar_input");
rForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = rInput.value;
  $.ajax({
    url: "/search",
    type: "post",
    data: { data: formData },
    success: function (response) {
      rInput.value = "";
      if (response == "Common True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.add("animation-common");
      }
      if (response == "Uncommon True") {
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.add("animation-uncommon");
      }
      if (response == "Rare True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.add("animation-rare");
      }
      if (response == "Epic True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.add("animation-epic");
      }
      if (response == "Legendary True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.add("animation-legendary");
      }
      if (response == "Mythic True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.add("animation-mythic");
      }
      if (response == "God True") {
        slotSlider.classList.remove("animation-uncommon");
        slotSlider.classList.remove("animation-rare");
        slotSlider.classList.remove("animation-epic");
        slotSlider.classList.remove("animation-legendary");
        slotSlider.classList.remove("animation-mythic");
        slotSlider.classList.remove("animation-common");
        slotSlider.classList.remove("animation-god");
        slotSlider.classList.add("animation-god");
      }
    },
  });
});
