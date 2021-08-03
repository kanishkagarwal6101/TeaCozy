let showMission = document.querySelector(".show-mission");
let missionStatement = document.querySelector(".over");
showMission.addEventListener("click", function () {
  missionStatement.classList.remove("hidden");
});
let close = document.querySelector(".close");
close.addEventListener("click", function () {
  missionStatement.classList.add("hidden");
});
