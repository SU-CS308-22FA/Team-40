
# Turkish Players Incentive Bonus System Web App (TPIBS) 

## Links
* Backend: https://backend308.onrender.com/
* Frontend: https://cs308team40.netlify.app/

## Description
What is TPIBS While 3-player rule is highly debated, TPIBS aims to encourage the clubs to give more play time to Turkish players in an alternative way. TPIBS provides constantly updated statistics of Turkish Players and with respect to statistics of the given player, a cumulative rating is determined for that player. Also each club is subjected to a competition with respect to their statistics of giving Turkish Player opportunities. TPIBS is also a tool that visualizes statistics of both players and clubs. TPIBS users can share their ideas on clubs and players to take part in discussion.

## User Documentation

### How to install the software
* Website links are above
### How to report a bug
Email us:
* bkarakadioglu@sabanciuniv.edu
* erdemkaratas@sabanciuniv.edu

### Known bugs
* No known bugs

##
## Developer Documentation

### How to obtain the source code
* Download the mernFrontendLogo branch, then enter npm install and npm start to the terminal
* Download the mernBackend branch, then enter npm install and npm start to the terminal
* Download the apiDataDownloader branch

### Directory & Branch Layout
* mernFrontendLogo is the main frontend branch
* mernBackend is the main backend branch
* apiDataDownloader is the branch to download the php program
* main is not used
* frontend branch is the branch we used for Sprint 0
* dev branch is the backend branch we used for Sprint 0, written with fastAPI instead of node and express
* mernFrontend is branch we stopped using because of merging problems 

### How to build and deploy the software
* To run frontend on terminal 
```bash
  npm install && npm start
```
* To run frontend on netlify 
Build command is
```bash
  npm install && npm run build
```

Publish directory is
```bash
  build
```
#
* To run backend on terminal 
```bash
  npm install && npm start
```
* To run backend on render 
Build command is
```bash
  yarn
```
Start command is
```bash
  node server.js
```
#
* To run apiDataDownloader, enter your own API-Football API key and run the php program.
