# WeatherApp

This project is live, find the temperature in your country!

https://weatherinfomh.herokuapp.com/

The purpose of this project is for know the weather of your country or any country you like, also with extra information of the country of choise. For example the population, the capital, the flag, and more.
With a background that changes depend on the temperatures of the place you chose.
The WheaterApp is a personal project with frontend with React and APIs from OpenWeather for the temperatures and the specifications, and an API from REST countries where I fetch the information for each country.

When we first entry to the page we encounter this 

![First entry](https://user-images.githubusercontent.com/69403501/166316963-fc03149c-e2d8-4a72-9f21-778681220b58.png)

Only a search bar where you can put any country you want, for example:

Argentina
![Search argentina](https://user-images.githubusercontent.com/69403501/166317047-0c0c1a5e-feb0-4ab3-87cc-22d2e5bbac8a.png)

United States
![USA search](https://user-images.githubusercontent.com/69403501/166317150-af1146ed-aeb3-491c-971d-dfe583323437.png)

But if you search a place that is hotter than 25° celsius you can encounter a different background like this:

Ghana
![Ghana search](https://user-images.githubusercontent.com/69403501/166317367-5c08b04a-61ac-447d-95c7-c346a7460224.png)

## Changes in the future:
 - A more dinamic background
 - More details for the information
 - A map where you can see where it is

The APIs:

OpenWeather: https://openweathermap.org/

REST countries https://restcountries.com/

Information of the technologies that the app use

# API

The term API is an acronym, and it stands for “Application Programming Interface.”
Is a conection betwen computer programs, a software interface, offering a service to other pieces of software. In this project I use the API by reaching the information and using what I need when the software response. 
I save the result in a variable where then I use it deploy the information.

# React

React is a JavaScript library for building user interfaces.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
