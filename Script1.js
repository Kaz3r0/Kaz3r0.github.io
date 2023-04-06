const videoIds = ['ZJ0zJDz1G1M', '8FCAHU93NAk', 'rSvBFm_MuXw', 'bUfift7822g', 'ZiQRF5h3zDQ', 'eEMIUy_ySA4', 'egX9ye-jayk', '-6zytAFQUKA', 'ZgqllpJbzdQ', 'ghopw-UZkfE', '8chC_7H97hU', 'NG3lRrCppN8', 'NVeYHe-T03g', 'SPbirjY6Hp0', 'qTcvYqf8bNM', 'IjoTYJNr8DA', 'tEPpRgeWPRI', 'BvwRs632UT8', 'nB1Y4TzOv6E', 'TSJUHE4woog', 'AywFZS5lzn0', 'Z7x0f-_D-mc', 'kOhDkg5UL7c'];

function regenerateVideo() {
  const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
  const videoUrl = `https://www.youtube.com/embed/${randomVideoId}`;

  const videoPlayer = document.getElementById('video');
  videoPlayer.src = videoUrl;
}

const regenerateButton = document.getElementById('regenerate');
regenerateButton.addEventListener('click', regenerateVideo);

regenerateVideo();

function song1() {
  var bop = document.getElementById("bop-btn1");
  var drop = document.getElementById("drop-btn1");
  bop.style.backgroundColor = "#FF8C87";
  bop.style.color = "white"
  drop.style.backgroundColor = "#0a050a";
  drop.style.color = "#3f3f3f"
  window.open("https://www.youtube.com/watch?v=5GcPA3C0QeI", "_blank");
}
function song2() {
  var bop = document.getElementById("bop-btn2");
  var drop = document.getElementById("drop-btn2");
  bop.style.backgroundColor = "#FF8C87";
  bop.style.color = "white"
  drop.style.backgroundColor = "#0a050a";
  drop.style.color = "#3f3f3f"
  window.open("https://www.youtube.com/watch?v=n9DmdAwUbxc", "_blank");
}
function song3() {
  var bop = document.getElementById("bop-btn3");
  var drop = document.getElementById("drop-btn3");
  bop.style.backgroundColor = "#FF8C87";
  bop.style.color = "white"
  drop.style.backgroundColor = "#0a050a";
  drop.style.color = "#3f3f3f"
  window.open("https://www.youtube.com/watch?v=jq6kaCcFE7c", "_blank");
}
function drop1() {
  var bop = document.getElementById("bop-btn1");
  var drop = document.getElementById("drop-btn1");
  drop.style.backgroundColor = "#FF8C87";
  drop.style.color = "white"
  bop.style.backgroundColor = "#0a050a";
  bop.style.color = "#3f3f3f"
}
function drop2() {
  var bop = document.getElementById("bop-btn2");
  var drop = document.getElementById("drop-btn2");
  drop.style.backgroundColor = "#FF8C87";
  drop.style.color = "white"
  bop.style.backgroundColor = "#0a050a";
  bop.style.color = "#3f3f3f"
}
function drop3() {
  var bop = document.getElementById("bop-btn3");
  var drop = document.getElementById("drop-btn3");
  drop.style.backgroundColor = "#FF8C87";
  drop.style.color = "white"
  bop.style.backgroundColor = "#0a050a";
  bop.style.color = "#3f3f3f"
}