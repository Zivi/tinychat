# README

## What files live where

* `frontend_design_spec.md` has a copy of the information/requirements for this
  exercise.
* `backend_design_spec.md` should contain the spec for what you want the
  backend developer to build so that your frontend demo app would actually work
  someday. Once you have your app more or less working, you'll need to write
  this.
* The main html page is generated on build using the HtmlWebpackPlugin.
  The file template.ejs contains the html skeleton
* The js files are located in `src/components`. For frameworks, React with JSX
  was used.
* The sylesheet is located in `src/styles`.
* The contentBase files `favicon.ico`, and `fakedata.json` are located in
  `public`


## Viewing the app

* At the project's root, run `npm install`
* Start the server with the command `npm start`
* The app can be accessed at `localhost:8000`

## Features of the application

* Compatible with Chrome, Firefox, Safari (desktop and iPhone)
* User can specify name
