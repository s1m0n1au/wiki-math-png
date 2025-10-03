console.log("Hello, World!");

const mathImages: NodeListOf<HTMLImageElement> = document.querySelectorAll(".mwe-math-element img");

for (const mathImage of mathImages) {
  mathImage.src = mathImage.src.replace("svg", "png");
  mathImage.src += '?.png';
}
