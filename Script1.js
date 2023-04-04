const videoIds = ['ZJ0zJDz1G1M', '8FCAHU93NAk', 'rSvBFm_MuXw', 'bUfift7822g', 'ZiQRF5h3zDQ', 'eEMIUy_ySA4', 'egX9ye-jayk', '-6zytAFQUKA', 'ZgqllpJbzdQ', 'ghopw-UZkfE', '8chC_7H97hU', 'NG3lRrCppN8', 'NVeYHe-T03g', 'SPbirjY6Hp0', 'qTcvYqf8bNM', 'IjoTYJNr8DA', 'tEPpRgeWPRI', 'BvwRs632UT8', 'nB1Y4TzOv6E', 'TSJUHE4woog'];

function regenerateVideo() {
  const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
  const videoUrl = `https://www.youtube.com/embed/${randomVideoId}`;

  const videoPlayer = document.getElementById('video');
  videoPlayer.src = videoUrl;
}

const regenerateButton = document.getElementById('regenerate');
regenerateButton.addEventListener('click', regenerateVideo);

regenerateVideo();
