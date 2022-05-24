var m_menu = document.getElementById("links");
var m_menu_open = document.getElementById("open");
var m_menu_close = document.getElementById("close");
var menu_body = document.getElementById("links");

function mobileMenuOpen() {
  menu_body.classList.remove("mobile_menu_animation_close");
  menu_body.classList.add("mobile_menu_animation_open");
  menu_body.style.display = "block";
  menu_body.addEventListener(
    "webkitAnimationEnd",
    function () {
      menu_body.style.display = "block";
    },
    false
  );
  m_menu_open.style.display = "none";
  m_menu_close.style.display = "block";
}

function mobileMenuClose() {
  menu_body.classList.remove("mobile_menu_animation_open");
  menu_body.classList.add("mobile_menu_animation_close");
  menu_body.style.display = "none";
  m_menu_open.style.display = "block";
  m_menu_close.style.display = "none";
}

/* Layers Slider */

function mobileLayersSlider() {
  // close roadmap slider
  m_menu_open.style.display = "block";
  m_menu_close.style.display = "none";
  road.classList.remove("mobile_animation_open");
  road.classList.add("mobile_animation_close");
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
    },
    false
  );
  // open layers slider
  m_menu.style.display = "none";
  layers.classList.remove("mobile_animation_close");
  layers.classList.add("mobile_animation_open");
  layers.style.display = "block";
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "block";
      title.style.display = "none"; // remove title
    },
    false
  );
}

function closeMobileLayersSlider() {
  // close layers slider with back arrow
  layers.classList.remove("mobile_animation_open");
  layers.classList.add("mobile_animation_close");
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
    },
    false
  );
}

/* Roadmap Slider */

function mobileRoadSlider() {
  // close layers slider
  m_menu_open.style.display = "block";
  m_menu_close.style.display = "none";
  layers.classList.remove("mobile_animation_open");
  layers.classList.add("mobile_animation_close");
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
    },
    false
  );
  // open roadmap slider
  m_menu_open.style.display = "block"; // reset mobile menu icon
  m_menu_close.style.display = "none";
  m_menu.style.display = "none"; // close mobile menu body
  road.classList.remove("mobile_animation_close");
  road.classList.add("mobile_animation_open");
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

function closeMobileRoadSlider() {
  // close roadmap slider with back arrow
  road.classList.remove("mobile_animation_open");
  road.classList.add("mobile_animation_close");
  road.addEventListener(
    "webkitAnimationEnd",
    function () {
      road.style.display = "none";
    },
    false
  );
}

/* FAQ Slider */

function mobileFaqSlider() {
  // close layers slider
  m_menu_open.style.display = "block";
  m_menu_close.style.display = "none";
  layers.classList.remove("mobile_animation_open");
  layers.classList.add("mobile_animation_close");
  layers.addEventListener(
    "webkitAnimationEnd",
    function () {
      layers.style.display = "none";
    },
    false
  );
  // open faq slider
  m_menu_open.style.display = "block"; // reset mobile menu icon
  m_menu_close.style.display = "none";
  m_menu.style.display = "none"; // close mobile menu body
  faq.classList.remove("mobile_animation_close");
  faq.classList.add("mobile_animation_open");
  faq.style.display = "block";
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "block";
      title.style.display = "none"; // remove title
    },
    false
  );
}

function closeMobileFaqSlider() {
  // close faq slider with back arrow
  faq.classList.remove("mobile_animation_open");
  faq.classList.add("mobile_animation_close");
  faq.addEventListener(
    "webkitAnimationEnd",
    function () {
      faq.style.display = "none";
    },
    false
  );
}
