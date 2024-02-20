## Tailwind Configuration in HTML Project

First Step is to initiate tailwind css in project 
npm install -D tailwindcss
npx tailwindcss init

Second step is to create a src folder and create a file name input.css then in this file paste this content 
@tailwind base;
@tailwind components;
@tailwind utilities;


Step Three is to add the following in tailwind.config.js 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Step Four is to run the following command in terminal
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
there is another way of doing this go to your package.json file an in the scripts write a dev aur run script and paste this command 


Step Five is to Link output.css to your html file 
 <!-- <!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html> -->
You Are Good to Go!


## Backend For this Project
Firebase is used for backend as service all authentications tasks, database management is controlled by firebase

