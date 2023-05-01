const slider = document.createElement("input");
slider.type = "range";
slider.min = 0;
slider.max = 100;
slider.value = 0;
slider.style.width = '60%';

const sliderValue = document.createElement("p");
sliderValue.innerHTML = "<span>" + slider.value + "</span>";
sliderValue.style.fontFamily = 'Franklin Gothic Medium';
sliderValue.style.fontSize = '150px';

slider.addEventListener("input", function() {
  sliderValue.querySelector("span").innerHTML = this.value;

});

document.body.append(sliderValue);
document.body.append(slider);