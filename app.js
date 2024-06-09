function ShowORHideShareSection() {
  const shareSection = document.getElementsByClassName("shareSection")[0];
  shareSection.classList.toggle("active");
  if (shareSection.classList.contains("active")) {
    document.getElementById("btn").style.backgroundColor = "hsl(217, 19%, 35%)";
    document.getElementById("btn").style.opacity = "0.8";
  } else {
    document.getElementById("btn").style.opacity = "1";
    document.getElementById("btn").style.backgroundColor = "hsl(210, 46%, 95%)";
  }
}
document.getElementById("btn").addEventListener("click", () => {
  ShowORHideShareSection();
});
