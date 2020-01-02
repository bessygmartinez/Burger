# :hamburger: Good Burger - Burger Log
#### Created: January 2020
---

## ABOUT GOOD BURGER - BURGER LOG

Good Burger - Burger Log is a burger logger made with Node, Express, Express Handlebars, Body Parser, and JawsDB via Heroku using MySQL. The app is deployed on [Heroku](http://www.heroku.com). The deployed app demo can be found [here](https://fierce-peak-44776.herokuapp.com/).

The app makes use of html templates with the help from Express Handlebars. The Model–View–Controller (MVC) pattern is used for the structure of the file setup and script content. A rudimentary Object-Relational Mapping (ORM) technique is used to tie the database usage and conroller script to manage the routing. Additional router action is handled via another script file (burgers.js).

---

## SITE PREVIEW
### The Homepage
When the user accesses the page, the following will appear:
![alt text](https://raw.githubusercontent.com/bessygmartinez/Good-Burger/master/public/assets/img/GoodBurger_screenshot.gif "Good Burger - Burger Log")

### :heavy_plus_sign: Adding A Burger
The user can add a burger name by entering the name in the textbox and clicking "Add." The new burger name will appear on the left-hand column.
![alt text](https://raw.githubusercontent.com/bessygmartinez/Good-Burger/master/public/assets/img/GoodBurger_add.gif "Good Burger - Add A Burger")

### :fork_and_knife: Eat A Burger
If the user clicks on "Eat," the burger they have chosen to eat will appear on the right-hand column as eaten.
![alt text](https://raw.githubusercontent.com/bessygmartinez/Good-Burger/master/public/assets/img/GoodBurger_eat.gif "Good Burger - Eat A Burger")

### :heavy_exclamation_mark: Burger Name Not Entered
If the user does not enter a burger name to add, a modal will pop up to notify them to enter a burger name to add:
![alt text](https://raw.githubusercontent.com/bessygmartinez/Good-Burger/master/public/assets/img/GoodBurger_modal.gif "Good Burger - Burger Not Entered")

---

## TECHNOLOGIES USED
  * [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/)
      * Node packages:
        * [express](https://www.npmjs.com/package/express)
        * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
        * [body-parser](https://www.npmjs.com/package/body-parser)
        * [mysql](https://www.npmjs.com/package/mysql)
  * [Bootstrap](https://getbootstrap.com/)
  * [Heroku](http://www.heroku.com)
      * Heroku Add-ons:
        * [JawsDB](https://elements.heroku.com/addons/jawsdb)
