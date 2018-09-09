# Project Overview

This application is created as part of Udacity's Nanodegree Restaurant Review App project assignment. The goal of the project was to make the pages responsive, accessible and available offline. 


## How to run this project

1. Clone or download the project from https://github.com/lshah/mws-restaurant-stage-1
2. Open a terminal from inside the project directory
3. Run a Python server with the command: py -m http.server 8000 OR  python3 -m http.server 8000
	1. If you do not have python installed you can download it from https://www.python.org/downloads/
	2. If port 8000 is already in use you can use a different port
4. Once the server is up open a browser and go to http://localhost:8000/
	1. This should load the application


## How to check if the page is responsive

1. When the browser is resized all the content fits within the narrower or larger viewport
2. Enable the mobile view on Chrome dev tool to check the site on different devices


## How to run accessibility checks on the application

1. Run an accessibility audit on Chrome dev tools using Lighthouse
2. Enable a Screen reader such as ChromeVox or NVDA and run through the application
3. Tab through the page and make sure all the interactive elements get a focus indicator around it and the user can interact with the element using just the keyboard

## How to check if the page is available offline
1. Open the site on Chrome browser
2. Once the application is open navigate to the pages you would like to see offline
3. Open dev tools on Chrome, go to the Network tab and set the network to Offline
4. Refresh the page
	1. If the page was accessed before setting the Network offline it should still render


## Reference

[Udacity's project resources](https://www.diigo.com/outliner/fjslyn/Udacity-Restaurant-Reviews-App-(project-%235)?key=zqiopam1yz)

## Dependencies
[Mapbox](https://www.mapbox.com/install/)
[Leaflet js](https://leafletjs.com/)