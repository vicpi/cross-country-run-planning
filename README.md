# Cross Country Run Planner

### Overview

This application enables you to plan your cross country run and download it as GPX file.

[Cross country running](https://en.wikipedia.org/wiki/Cross_country_running) is a sport in which teams and individuals run a race on open-air courses over natural terrain such as dirt or grass.

The application is deployed on [Heroku](https://obscure-hollows-42504.herokuapp.com).

### Install

First, you need to clone the repository and install project dependencies:

```sh
git clone https://github.com/vicpi/cross-country-run-planning.git
cd cross-country-run-planning
npm install
npm start
```

```npm start``` will build the application in development mode and start the development server. It will open the application in the browser automatically.

### Production

In order to run the application in production mode, run ```npm run production``` in the terminal.

### Tech Stack

- React
- Redux
- Webpack
- SASS
- Jest
- Enzyme

### Unit Tests

You can run unit tests using ```npm test``` command. 

Unit tests are written using Jest and Enzyme.

### Requirements

Users can plan their favorite route across fields and hills by just placing markers as waypoints on the map. For detailed planning the same waypoints show up as a list where users can delete and rearrange them until the route is perfect and ready to download.

The User Interface should be based on the following design.

![Image](https://github.com/vicpi/cross-country-run-planning/blob/master/public/design.png)

### License

[MIT](https://github.com/vicpi/cross-country-run-planning/blob/master/LICENSE)