let submitButton = document.querySelector(".submit");
let rateContainer = document.querySelector(".rate");
let thankingContainer = document.querySelector(".thank-msg");
let selectedRate = 0;

let ratingNumbers = document.querySelectorAll(".rating span");
let [...ratingList] = ratingNumbers;

for (let index in ratingList) {
  ratingList[index].onclick = function () {
    selectedRate = ratingList[index].innerHTML;
  };
  if (index - 1 >= 0) {
    ratingList[index].addEventListener("mouseover", function () {
      ratingList[index].style.cssText = `
            color: white;
            background-color: hsl(25, 97%, 53%);
            transition: 0.5s;
        `;
      ratingList[index - 1].style.cssText = `
        color: white;
        background-color: hsl(217, 12%, 63%);
        transition: 0.5s;
        `;
    });
    ratingList[index].addEventListener("mouseleave", function () {
      ratingList[index].style.cssText = `
            color: hsl(217, 12%, 63%);
            background-color: rgba(255, 255, 255, 0.1);
            transition: 0.5s;
        `;
      ratingList[index - 1].style.cssText = `
            color: hsl(217, 12%, 63%);
            background-color: rgba(255, 255, 255, 0.1);
            transition: 0.5s;
        `;
    });
  } else {
    ratingList[index].addEventListener("mouseover", function () {
      ratingList[index].style.cssText = `
                color: white;
                background-color: hsl(25, 97%, 53%);
                transition: 0.5s;
            `;
    });
    ratingList[index].addEventListener("mouseleave", function () {
      ratingList[index].style.cssText = `
                color: hsl(217, 12%, 63%);
                background-color: rgba(255, 255, 255, 0.1);
                transition: 0.5s;
            `;
    });
  }
}

thankingContainer.style.visibility = "hidden";
let selectedRateP = document.querySelector(".thank-msg p:first-of-type");

submitButton.onclick = function () {
  selectedRateP.innerHTML = `you selected ${selectedRate} out 5`;
  thankingContainer.style.visibility = "visible";
  thankingContainer.style.cssText = "z-index: 50";
};
