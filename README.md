# D-Burger

## Description

 This Logger application uses MySQL, Node, Express, Handlebars and a homemade ORM.

 ![D-Burger](https://github.com/tvolpatto/d-burger/blob/master/public/screenshots/screenshot.PNG)

 ## Running 

 The application is deployed on [Heroku](https://www.heroku.com/home).

 [Click here](https://d-burger.herokuapp.com/) to access it.

 ## Running locally

 1. Install the dependencies: ```npm install```;
 2. Run: ```npm start```;
 3. The default  port is *8080*, so to access you must go to **http://localhost:8080**

## APIS

   * ```/api/burger``` : Adds a new burger and return the ID 
   * ```/api/devour/:id``` : Update the ```devoured``` field for the select burger 

## Dependencies

   * [MySql](https://www.mysql.com/)
   * [Express](https://expressjs.com/)
   * [Handlebars](https://handlebarsjs.com/)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


