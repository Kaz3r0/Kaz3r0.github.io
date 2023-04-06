function submitRating() {
  
  const button = document.query Selector("button")
  const notification = 

  button.addEventListener("click", () =>{
	  Notification.requestPermission().then(perm =>{
		  if (perm === "granted") {
			new Notification('Thank You for Rating!');
		  }
	  })
  })
}
