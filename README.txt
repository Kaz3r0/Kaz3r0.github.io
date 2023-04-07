This repository contains an HTML webpage for "The Empty Set" website. This is built off of 
the second assignment with the orignal code having both css and html code. 
*************************************************************************************************************	
All html's include:
HTML
	NAVIGATION
		The navigation bar is located at the top of the page and includes links to three different 
		pages: Home, Creators, and Programs.
		Home(index.html)
			This file contains the HTML code for the home page of the website. It includes a 
			header with links to the home page, creators page, and programs page. It also 
			includes a video of the week, patch notes, and monthly musicals.
		Creators.html
			This file contains the HTML code for the creators page of the website. It includes 
			a header with links to the home page, creators page, and programs page. It also 
			includes information about the creators that inspired me to become a computer 
			programmer.
		Review.html
			This file contains the HTML code for the Reviews page of the website. It includes 
			a header with links to the home page, creators page, and reviews page. It also includes 
			a hero splash screen and review submission form.
	ASSETS
	This folder contains the image, video, and audio files used in the website. It includes the website 
	icon, and monthly musicals.
*************************************************************************************************************
The index.html page includes the following sections:
HTML		
	RANDOM VIDEO
		This section includes an iframe with a random youtube video from a curated list of around 25 videos
		Below the video is a button to regenerate a video as well as a form for users to rate the video out of 10.
		Fianlly below that is a color changer button which cycles through 3 other palettes.

		MONTHLY MUSICALS
		This section includes three songs, each with a title and artist, as well as an audio player for 
		each song. Below each audio player, there is a button for users to choose if the song as a "Bop" or "Drop."
		If it is a Bop it takes the user to the video if youtube.
		
		PATCH NOTES
		This section includes patches that describe the website's updates and changes 
		over time.

CSS - Style.css
	The HTML code includes a link to an external stylesheet located in the same directory as the HTML file 
	called style.css. This file contains the CSS code for the website. It includes styling for the header, 
	video of the week, patch notes, and monthly musicals. It also includes general styling for the website, 
	such as font and color choices.
	SIGNIFICANT CSS:
		input[type=number] - sets the width of number inputs to 200 pixels, adds 12 pixels of padding on 
			the top and bottom and 20 pixels of padding on the left and right, adds 8 pixels of margin on the 
			top and bottom and 0 on the left and right, sets the box-sizing to border-box, adds a 3-pixel solid 
			#ccc border, and adds a transition of 0.5 seconds when the input is focused (changes the border 
			color to #555) and removes the outline.
		input[type="radio"] - hides radio buttons.
		input[type="radio"]:checked + label - styles the label of a checked radio button by adding a 
			background color of #FF8C87, a thin solid border of #9e829c, a border radius of 10 pixels, a default 
			cursor, and white text color.
		a h1.subtitle:hover - changes the color of a subtitle inside a link when hovered to #FF8C87.
	There is also the use of @media to make a new style based on the users webpage style such as phones and tablets.
	
JAVASCRIPT - Script1.js
	This Javascript file contains functions for generating random Youtube videos and for changing the background 
	color of buttons and opening URLs in a new tab.
	To use this Javascript file, simply include it in your HTML file using the <script> tag. The functions regenerateVideo(),
		song1(), song2(), song3(), drop1(), drop2(), and drop3() can then be called in your Javascript code or used as event 
		listeners on your HTML buttons.
	regenerateVideo() selects a random video ID from the videoIds array and updates the src attribute of the video player 
		with ID 'video'.
	song1(), song2(), and song3() change the background color and text color of buttons with IDs 'bop-btn1', 'bop-btn2', 
		and 'bop-btn3' and the background color and text color of buttons with IDs 'drop-btn1', 'drop-btn2', and 'drop-btn3'. 
		They then open URLs in a new tab.
	drop1(), drop2(), and drop3() change the background color and text color of buttons with IDs 'drop-btn1', 'drop-btn2', 
		and 'drop-btn3' and the background color and text color of buttons with IDs 'bop-btn1', 'bop-btn2', and 'bop-btn3'.

JAVASCRIPT - ColorChanger.js
	This JavaScript function is designed to change the background color, text color, and button color of a website when a 
	user clicks on a button with the ID 'colorButton'.
	The changeColor() function uses the querySelector method to select various elements on the page, including the body 
		element, head element, header element, and several other elements with specific class names.

	When the button with the ID colorButton is clicked, the function checks the current background color of the body element 
		using the style.backgroundColor property. If the background color matches one of four predefined colors, the function 
		changes the background color, text color, and button color to a new set of predefined colors. If the current 
		background color does not match any of the predefined colors, the function sets the background color, text color, and 
		button color to a final set of predefined colors.

Predefined Colors
The predefined colors used in this function are as follows:

rgb(46, 66, 114) (#2E4272)
rgb(179, 75, 73) (#B34B49)
rgb(168, 205, 27) (#A8CD1B)
main page color (#9e829c)
Note that these colors can be easily customized by editing the if statements in the function code.

JAVASCRIPT - Notif.js
	This JavaScript code is designed to add an event listener to a button with the ID of submit-btn. When the button is 
		clicked, the code will prevent the default form submission behavior and display an alert message with the text "Thank you 
		for submitting the form!".
	To use this code in your project, you can copy and paste it into your existing JavaScript file or create a new JavaScript 
		file and link it to your HTML document using the <script> tag.
*************************************************************************************************************	
The Creators.html page includes the following sections:
HTML		
	There is a div with class "main-body" that contains the images and names of the creators.

CSS - Style2.css
	The styles include background colors, borders, font sizes, and margins. The flexbox layout is used 
	to arrange the images and names of the creators in rows. Hover effects are added to the images and 
	names to change their colors and sizes when the user hovers over them.
	There is also the use of @media to make a new style based on the users webpage style such as phones and tablets.

JAVASCRIPT - PhotoGallery.js
	This JavaScript code creates a modal gallery of photos on a webpage. The code first selects all elements with the class 
		photo using document.querySelectorAll(). Then, it creates a modal container div element with the class modal using 
		document.createElement() and appends it to the body of the webpage using document.body.appendChild().
	Next, the code adds a click event listener to each photo element using a forEach loop. When a photo is clicked, the code 
		creates an img element, sets its source to the clicked photo's source using this.src, appends it to the modal 
		container using modal.appendChild(), and sets the modal's display to block.
	Finally, the code adds a click event listener to the modal container. When the modal container is clicked, it sets the 
		modal's display to none and clears its contents using modal.innerHTML = ''.
*************************************************************************************************************	
The Review.html page includes the following sections:
HTML		
	There is a hero splash of a friend with button that takes the user straight to their instagram.
	There is also a div that holds a form where a user is required to enter their name and give it 
	ranking out of 5 stars and to lastly leave a comment and then submit it.
	
CSS - Style3.css
	The styles include background colors, borders, font sizes, and margins.
	SIGNIFICANT CSS:
		hero-splash - Styles for an element with class hero-splash, including height, background image, background 
			size, display, and alignment.
		hero-splash h1 - Styles for the h1 element inside an element with class hero-splash, including font size 
			and margin.
		hero-splash p - Styles for the p element inside an element with class hero-splash, including font size and margin.
		hero-splash button - Styles for the button element inside an element with class hero-splash, including padding, 
			border, background color, color, font size, cursor, and transition.
		hero-splash button:hover - Styles for the button element inside an element with class hero-splash when hovered, 
			including background color and color.
	There is also the use of @media to make a new style based on the users webpage style such as phones and tablets.
	
JAVASCRIPT - Review.js
	This is a simple JavaScript function that opens an Instagram profile in a new tab when a button is clicked. The function 
		openInstagram() uses the window.open() method to create a new window and load the URL of the Instagram profile in 
		it.
	Note that the second parameter to the window.open() method ("_blank") specifies that the URL should be loaded in a new 
		tab or window, depending on the user's browser settings.
*************************************************************************************************************	
FREE HOSTING ON GITHUB
	https://kaz3r0.github.io/
