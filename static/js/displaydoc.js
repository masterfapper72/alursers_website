// open litepaper
function openPaper() {
  paper.style.display = "block";
  pdf_state.currentPage = 1;
  document.getElementById(pdf_state.currentPage).scrollIntoView();
}

// close litepaper
function closePaper() {
  paper.style.display = "none";
}

// display litepaper
var pdf_state = {
  pdf: null,
  currentPage: 1,
  pageNum: 0,
  zoom: 2,
};

pdfjsLib.getDocument("/static/docs/LitePaper.pdf").then(function (pdf) {
  pdf_state.pdf = pdf;
  viewer = document.getElementById("paper");
  numPages = pdf.numPages;
  var n = 0;
  for (page = 1; page <= numPages; page++) {
    canvas = document.createElement("canvas");
    canvas.className = "paper_container";
    canvas.id = page;
    viewer.appendChild(canvas);
    render(page, canvas);
  }
});

function render(pageN, canvas) {
  pdf_state.pdf.getPage(pageN).then(function (page) {
    viewport = page.getViewport(pdf_state.zoom);
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({
      canvasContext: canvas.getContext("2d"),
      viewport: viewport,
    });
  });
}

function pre() {
  pdf_state.currentPage--;
  if (pdf_state.currentPage < 1) {
    pdf_state.currentPage = 1;
  }
  document.getElementById(pdf_state.currentPage).scrollIntoView();
}

function next() {
  pdf_state.currentPage++;
  if (pdf_state.currentPage > 10) {
    pdf_state.currentPage = 1;
  }
  document.getElementById(pdf_state.currentPage).scrollIntoView();
}
