document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anim-bg");
  console.log("elements");
  document.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;

    elements.forEach((element) => {
      const ratioX = element.getAttribute("ratioX");
      const ratioY = element.getAttribute("ratioY");

      const moveX = clientX;
      const moveY = clientY;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});
