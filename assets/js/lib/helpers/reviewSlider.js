import { Splide } from "@splidejs/splide";


const reviewSlider = function () {
  document.addEventListener("DOMContentLoaded", () => {
    var splide = new Splide(".splide", {
      perPage: 2,
      rewind: true,
      padding: "16px",
      //autoWidth: true,
    });
    splide.mount();
  });
};

export default reviewSlider;
