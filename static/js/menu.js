var road = document.getElementById("road"); // roadmap slider
var faq = document.getElementById("faq"); // FAQ slider
var layers = document.getElementById("layer"); // layers slider
var title = document.getElementById("tit"); // "welcome" title
var rarity = document.getElementById("rarity"); // rarity slider
var paper = document.getElementById("paper"); // litepaper
var rarityContent = document.getElementById("ser");

/* Roadmap Slider */

function menuRoadSlider() {
  // close FAQ slider
  faq.classList.remove("menu_animation_open");
  faq.classList.add("menu_animation_close");
  document.getElementById("faq_arrow").style.display = "none";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // close rarity slider
  rarity.classList.remove("menu_animation_open");
  rarity.classList.add("menu_animation_close");
  rarityContent.style.display = "none";
  rarity.addEventListener(
    "webkitAnimationEnd",
    function () {
      rarity.style.display = "none";
    },
    false
  );
  // close layers slider
  layers.classList.remove("menu_animation_open");
  layers.classList.add("menu_animation_close");
  document.getElementById("layers_arrow").style.display = "none";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
    },
    false
  );
  // open roadmap slider
  road.classList.remove("menu_animation_close");
  road.classList.add("menu_animation_open");
  road.style.display = "block";
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "block";
      title.style.display = "none"; // remove title
    },
    false
  );
}

function closeRoadSlider() {
  // close roadmap slider with back arrow
  road.classList.remove("menu_animation_open");
  road.classList.add("menu_animation_close");
  paper.style.display = "none"; // close litepaper if open
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
}

/* Rarity Search Slider */

function menuRaritySlider() {
  // close roadmap slider
  road.classList.remove("menu_animation_open");
  road.classList.add("menu_animation_close");
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // close FAQ slider
  faq.classList.remove("menu_animation_open");
  faq.classList.add("menu_animation_close");
  document.getElementById("faq_arrow").style.display = "none";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // close layers slider
  layers.classList.remove("menu_animation_open");
  layers.classList.add("menu_animation_close");
  document.getElementById("layers_arrow").style.display = "none";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // open rarity slider
  rarity.classList.remove("menu_animation_close");
  rarity.classList.add("menu_animation_open");
  rarity.style.display = "block";
  rarityContent.style.display = "none";
  slotSlider.classList.remove("animation-uncommon");
  slotSlider.classList.remove("animation-rare");
  slotSlider.classList.remove("animation-epic");
  slotSlider.classList.remove("animation-legendary");
  slotSlider.classList.remove("animation-mythic");
  slotSlider.classList.remove("animation-god");
  slotSlider.classList.remove("animation-common");
  rarity.addEventListener(
    "webkitAnimationEnd",
    function () {
      rarity.style.display = "block";
      rarityContent.style.display = "block";
    },
    false
  );
}

function closeRaritySlider() {
  // close rarity slider with back arrow
  rarity.classList.remove("menu_animation_open");
  rarity.classList.add("menu_animation_close");
  rarityContent.style.display = "none";
  rarity.addEventListener(
    "webkitAnimationEnd",
    function () {
      rarity.style.display = "none";
    },
    false
  );
}

/* Layers Slider */

function menuLayersSlider() {
  // close FAQ slider
  faq.classList.remove("menu_animation_open");
  faq.classList.add("menu_animation_close");
  document.getElementById("faq_arrow").style.display = "none";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // close rarity slider
  rarity.classList.remove("menu_animation_open");
  rarity.classList.add("menu_animation_close");
  rarityContent.style.display = "none";
  rarity.addEventListener(
    "webkitAnimationEnd",
    function () {
      rarity.style.display = "none";
    },
    false
  );
  // close roadmap slider
  road.classList.remove("menu_animation_open");
  road.classList.add("menu_animation_close");
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // open layers slider
  layers.classList.remove("menu_animation_close");
  layers.classList.add("menu_animation_open");
  layers.style.display = "block";
  document.getElementById("layers_arrow").style.display = "none";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "block";
      document.getElementById("layers_arrow").style.display = "block";
      title.style.display = "none"; // remove title
    },
    false
  );
}

function closeLayersSlider() {
  // close layers slider with back arrow
  layers.classList.remove("menu_animation_open");
  layers.classList.add("menu_animation_close");
  document.getElementById("layers_arrow").style.display = "none";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
}

/* FAQ Slider */

function menuFaqSlider() {
  // close rarity slider
  rarity.classList.remove("menu_animation_open");
  rarity.classList.add("menu_animation_close");
  rarityContent.style.display = "none";
  rarity.addEventListener(
    "webkitAnimationEnd",
    function () {
      rarity.style.display = "none";
    },
    false
  );
  // close layers slider
  layers.classList.remove("menu_animation_open");
  layers.classList.add("menu_animation_close");
  document.getElementById("layers_arrow").style.display = "none";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
    },
    false
  );
  // close roadmap slider
  road.classList.remove("menu_animation_open");
  road.classList.add("menu_animation_close");
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
  // open faq slider
  faq.classList.remove("menu_animation_close");
  faq.classList.add("menu_animation_open");
  faq.style.display = "block";
  document.getElementById("faq_arrow").style.display = "none";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "block";
      document.getElementById("faq_arrow").style.display = "block";
      title.style.display = "none"; // remove title
    },
    false
  );
}

function closeFaqSlider() {
  // close roadmap slider with back arrow
  faq.classList.remove("menu_animation_open");
  faq.classList.add("menu_animation_close");
  document.getElementById("faq_arrow").style.display = "none";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "none";
      title.style.display = "block"; // add title back
    },
    false
  );
}
