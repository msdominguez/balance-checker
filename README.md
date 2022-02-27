# BalanceChecker

[https://balance-checker-angular.herokuapp.com](https://balance-checker-angular.herokuapp.com)

Enter your 16-digit card number (PAN) to see your account balance.

Angular app integrated with NgRx for state management. Node.js Express server back-end integrated with MongoDB.

# Running Locally

## Serve - dev
1. `npm run serve:dev`
2. Navigate to [`http://localhost:4200`](http://localhost:4200)

## Serve - prod (used for Heroku)
1. `npm run start`
2. Navigate to [`http://localhost:8080`](http://localhost:8080)

## Serve the front-end
1. `ng serve`
2. Navigate to [`http://localhost:4200`](http://localhost:4200)

## Serve the back-end
1. `node server.js`
2. Server should be running on [`http://localhost:8080`](http://localhost:8080)

# MongoDB
* Gmail account: balancecheckertestdb@gmail.com, pw: testserver
* DB user: balancecheckertestdb, pw: testserver
* Database: BalanceChecker
* Collection: UserInfo
* Note: access allowed from all IPs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
