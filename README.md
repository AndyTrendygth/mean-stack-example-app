# The MEAN Stack: A starters guide

## What this article covers

In this article I'll cover the MEAN technology stack in general, how to set it up and build an example application – which you can code along! Let’s dive in.

## What's the MEAN stack?

In one sentence: The MEAN stack is a combination of frameworks used to build full stack web applications. It is JavaScript based, so every architecture layer uses it to bring the application to life – which can have many benefits, developer experience wise, but also business wise. 

The acronym MEAN stands for the following:
 - **M**ongoDB
 - **E**xpress
 - **A**ngular
 - **N**ode.js

Each letter represents one layer: MongoDB as the primary database, Express and Node act as the backend and Angular makes up for the frontend. The stack and its variations are very popular, especially with JavaScript developers.
Now, let us have a look at these technologies in detail.

## The architecture of MEAN

TODO: add MEAN architecture graphic

### MongoDB as the primary database

---

MongoDB is a noSQL document database, that stores Data in flexible JSON documents. It has over 85 million downloads and is almost the go-to choice for most developers when it comes to noSQL databases. 

A big community and being able to host the database either locally with docker or with your favourite cloud provider makes Mongo a great choice as a database.

https://www.mongodb.com/what-is-mongodb

### Express and Node.js for the backend

---

Sitting on top of the database, we have our backend server hosted with Node and an Express API. 

Node.js is a JavaScript runtime environment mostly acting as a server for such applications. The “feature” making Node outstanding is that it enables JavaScript to run outside of web-browsers. 

It’s open-source and runs on almost any operating system, if you already have developed some JavaScript on your device, you have it installed too!

Express enables our app to talk with our frontend and the outer world, it’s our API – also based on JavaScript. Powering web applications since 2010 hand in hand with Node.js its service is crucial for the MEAN stack.

https://expressjs.com/

### Angular as the frontend

---

Firstly developed and published by Google in 2016 – as a rewrite of AngularJS, it is a TypeScript/JavaScript frontend framework for building small to big enterprise applications. 

Being TypeScript first, safe, and robust development is ensured with strong types – making it extremely popular in enterprise applications.  
The framework handles our complete client-side application including styling and functionality. 

And something special about this guide: we’ll work with **Angular 17**, which has a lot of updates and new features!

## Variations of the MEAN stack

The frontend framework is the most opinionated discussion around web developers (JavaScript framework war) and caused the variations of the MEAN stack. 

The framework for the frontend is the only thing that gets switched out when working with variations of MEAN. 

The most popular variations are:
 - MERN – React
 - MEVN - Vue 

or with any other frontend framework you like, such as:

 - MESN – Svelte

But for this article, we’ll stick with the original Angular.

## Who uses the MEAN stack?

I previously mentioned that MEAN is pretty popular, but which companies do actually use it? Well, here’s some examples:
 - Google (Gmail, Play Store, G Suite)
 - Forbes
 - Paypal (for its developer portal)
 - UpWork

If you were to include the MERN stack, you’d have even more industry leaders on that list. That is because React gained a lot of popularity in the last 3 years.

https://seclgroup.com/10-best-examples-of-websites-and-apps-built-with-angular/
https://www.trio.dev/blog/companies-use-angular
https://blog.hubspot.com/website/angularjs-website-examples
https://www.monocubed.com/blog/websites-built-with-angular/

## Pros of the MEAN stack

### Only one language

---

Having one language for all layers makes it easier to build and maintain the system as only a developer proficient in JavaScript/TypeScript is needed – and not one which knows many technologies, which may be hard and expensive to find for a business. 

Writing the code in one language is also good for the developer itself as it creates consistency throughout the project, and you don’t have to switch technologies every time you work on different architecture layers. That may increase your productivity and you can become a very advanced JavaScript developer when working a lot with the technology.


### Big community and well supported

---

Angular, Express and MongoDB have a very big community and they have been around for a long time which tells that these frameworks have been battle tested – which is great when developing, because you won’t have to migrate your system every time requirements change.

Not only the community is big, also the backers. Having one of the biggest tech corporations worldwide maintaining Angular is absolutely great. This ensures high-quality service and security which is crucial for developing large scale applications. 

Moreover, MongoDB is being looked after by MongoDB Inc., the company that founded the database platform – a big pro because the database really matters.

## Cons of the MEAN stack

Not everything is perfect even the MEAN stack! Sadly, it still has some flaws which need to be considered as well.

### No types by default

---

JavaScript itself doesn’t require you to use types which can cause a lot of chaos in your code – imagine using a data object and having to guess in which format the values are, kinda hard eh?

Of course, that problem is solved by TypeScript – but it is not the default and there are many projects which don’t use it (just because they don’t have to). That makes your code hard to maintain, test and extend especially for developers that don’t know your codebase that well.

### Logic isolation

---

Since we have a tight connected business and server logic it is pretty hard to separate them – often causing 🍝(spaghetti)-code, something that we do not really want for scalable and maintainable applications.

## How to set up a MEAN application

I think you got the core concepts and ideas of MEAN, so now let us have a look on how to set up a walking-skeleton application! Please note that this is an opinionated guide – you could structure the project differently as well.

### What you'll need to follow along

Before starting to read the guide make sure you have the following things ready:

 - Your favourite IDE (e.g. VS Code, IntelliJ)
 - Installed Docker Desktop
 - Downloaded and installed Node.js
 - Optional: A git repository to publish your code
 - Optional: VS Code MongoDB extension

If you got everything ready, go on reading!

### Setup MongoDB Docker container

---

First of all, we need our database. For that we’ll spin up a Docker container with a MongoDB image.

>**📕 Note:** You can also host the database on MongoDB Atlas – but this is not covered in this article.

Start Docker Desktop and then open your terminal. To pull the latest image from mongo, enter the following:

```shell
docker pull mongo:latest
```

And then run the container with a name you want.

```shell
docker run -d -p 27017:27017 --name=mean-stack-example-mongodb -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
```

To bind our container port to our machine port we use the `-p` (port) option. We also want to secure our database with a root admin user, which can be set with `-e` (environment variable) for username and password.

To test if our container works, we can open up VS Code and connect to our database using the MongoDB extension. Just click on the ‘Add a connection’ button and choose ‘Connection Settings’ – which will open a form to specify the connection.


![MongoDB VS Code extension set up form](/assets/mongodb_form.png)

Enter the username and password from the docker run command and hit connect! Now you should see the connection in the sidebar and its databases when expanding the toggle.

![MongoDB VS Code extension database view](/assets/mongodb_toggle_view.png)

If you want to create a test database with a simple insert, create a new playground and enter the following:

```js
use('test');
db.createCollection('testCollection');
db.testCollection.insertOne({name:"hey there!"})
```

That’s all you need to know for now. Let us go on and set up our walking skeleton.

### Set up the server-side application

---

For the sake of simplicity, I will use a mono-repository approach for this guide, but that’s not a must – feel free to adapt it to your needs.

Open an empty folder/repository in your IDE (the project folder) and create the folders for the backend:

 - `server`
 - `server/src`

The src folder is where our Express files will go. Now init a node project inside the `server` directory.

```shell
cd server
npm init
```

And since we want to work with safe types add a `tsconfig.json` and a `.env` file to the folder (Leave it empty for now).

We need some npm packages for our Express.js REST API, so install them in the server directory. And because we are working with typescript, we also need to add the types. 

```shell
npm install cors dotenv express mongodb
npm install --save-dev typescript @types/cors @types/express @types/node ts-node
```

We need `mongodb` to connect our application to the database, and the `express` package to create our api. `dotenv` and `cors` are for our communication with the frontend over the api.

And lastly, we need to add some configuration to the `tsconfig.json` file – typescript uses this config to compile the code we write.

**mean-stack-example-app/server/tsconfig.json**

```json
{
   "compilerOptions": {
       "module": "commonjs",
       "esModuleInterop": true,
       "target": "es6",
       "noImplicitAny": true,
       "moduleResolution": "node",
       "sourceMap": true,
       "outDir": "dist",
       "baseUrl": ".",
       "allowJs": true,
       "paths": {
           "*": ["node_modules/*"]
       }
   },
   "include": ["src/**/*"]
} 
```

That’s all for the basic configuration. To see how to connect to the database and add an express route, read on to the example project.

### Set up the Angular client

---

In the root folder (`mean-stack-example-app`) of the project we need to install the Angular cli with the following command:

```shell
npm install -g @angular/cli
```

After successful installation, again in the root directory, create a new Angular application:

```shell
ng new client --routing --style=css
```

When the initialization is done, we’ll have a client folder where the Angular app is located. We need the `--routing` flag, so a routing module is being generated (for the individual pages of the application) and `--style` makes css our default preprocessor. 

Now you can start the application by entering the following in your terminal:

```shell
cd client 
ng serve
```

That's everything for setting up the application. If you want to figure out on your own how to connect to the database, build express endpoints and create the client pages - feel free to do so now!

For everyone that's working with MEAN for the first time, the following example project is exactly what you need to learn the stack - go on reading!

## Let's build an example project!

The best way to learn is practice – that’s why I’ll build a recipe book with the MEAN stack! It is a simple CRUD-app, here a sneak-peek on what it will look like:

**TODO: Add image of application**

### Add document to MongoDB

---

Firstly, we'll need a document in our database where we can store the recipes. For that, open up a playground in your MongoDB extension and add a document.

```js
use('test');
db.createCollection('recipes');
```

### Create interfaces for type safety

---

For type safety let us add an interface for our recipe & ingredient.

**mean-stack-example-app/server/src/recipe.ts**

```ts
import * as mongodb from "mongodb"

export interface Recipe {
    title: string;
    description: string;
    category: "breakfast" | "main course" | "snack" | "dessert";
    ingredients: object;
    instructions: string;
    _id?: mongodb.ObjectId;
}
```

A recipe has a title, brief description, category, ingredients (array of Ingredient interface), instructions and an optional `_id` which will be generated by MongoDB automatically.

**mean-stack-example-app/server/src/ingredient.ts**

```ts
import * as mongodb from "mongodb"

export interface Ingredient {
    name: string;
    quantity: number;
    unit: number;
    _id?: mongodb.ObjectId;
}
```

An ingredient consists of a name, quantity and unit. And again the optional `_id`.

### Connect Express to database

---

In our `database.ts` file we need to write the following to connect our database to the server:

**mean-stack-example-app/server/src/database.ts**

```ts
import * as mongodb from "mongodb";
import { Recipe } from "./recipe";

export const collections: {
    recipes?: mongodb.Collection<Recipe>;
}={};

export async function connectToMongoDb(uri:string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();
    
    const db = client.db("test");
 
    const recipesCollection = db.collection<Recipe>("recipes");
    collections.recipes = recipesCollection;
}
```

In this file, I am exporting a `collections` constant, which contains the recipes from the database. If your database model has more collections, you can reference them in this object.

The `connectToMongoDb` function handles the connection to the database with the native MongoClient. When calling this method we need to add a `uri` parameter, which is our connection string to the database.

Because I have my collection in the "test" database I need to reference it in the `db` constant. Lastly, I am pulling the `recipes` collection from the database and set it to the recipes constant.

Now we need to call the function in our `server.ts` and start the express server.

**mean-stack-example-app/server/src/server.ts**

```ts
import * as dotenv from "dotenv"
import express from "express"
import { connectToMongoDb } from "./database"
import { error } from "console";

dotenv.config();

const {CONNECTION_URI, EXPRESS_PORT} = process.env;

if (!CONNECTION_URI) {
    console.error("Missing connection URI in .env");
    process.exit(1);
}

if (!EXPRESS_PORT) {
    console.error("Missing express port in .env");
    process.exit(1);
}

connectToMongoDb(CONNECTION_URI)
.then(()=>{
    const app = express();
    
    app.listen(EXPRESS_PORT,()=>{
        console.log(`Server running on localhost:${EXPRESS_PORT}`);
    })
})
.catch(error=> console.error(error));
```

I am referencing two variables from my `.env` file, the connection string to the database and the port I want to run my express server on. That could look something like this:

```
CONNECTION_URI=mongodb://user:password@localhost:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true
EXPRESS_PORT=5200
```

> ❗ Tip: You can get the connection string of your database by right clicking on the connection in the MongoDB extension->"Copy Connection String".

To catch some errors, I am checking if the variables exist, and then proceed to calling the `connectToMongoDb` function with the `CONNECTION_URI` as a parameter. An Express server is started on the specified port if the connection was successful.

Let's see if this works. Enter this command to start the server:

```shell
cd server
npx ts-node src/server.ts
```

Which gives the following output (if successful):

```
Server running on localhost:5200
```

Great, that's it for our walking-skeleton! Now we can move on to create our first use-case: Viewing the recipes.

> ❗ Note: I work from use-case to use-case and not by architecture layers.

### View multiple/single recipe(s)

---

For this use-case we want to fetch multiple and a single recipe from the database with GET requests and display them on the frontend.

#### REST Endpoints

---

Firstly, let us create the endpoints to fetch data from the database. For that, I'll use the router from express in the `recipe.routes.ts` file.

The endpoints needed:
 - `/` -> GET all recipes
 - `/:id` -> GET one recipe by its id

**mean-stack-example-app/server/src/recipe.routes.ts**


```ts
import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const recipeRouter = express.Router();
recipeRouter.use(express.json());

recipeRouter.get("/", async (_req, res) => {
    try {
        const recipes = await collections.recipes.find({}).toArray();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send(error.message);
    }       
});

```

I am instantiating a `recipeRouter` which is an express router and tell it to use json formatting. To create a GET endpoint, I call the `get()` method on the router with the url and the function to be executed.

In the try block I am using my `collections.recipes` instance from the `database.js`, to execute a find query on the collection.

If everything went fine, we receive all recipes along with a status code of 200. 

To receive one recipe by it's id add the following to your `recipe.routes.ts`

**mean-stack-example-app/server/src/recipe.routes.ts**

```ts
recipeRouter.get("/:id",async (req, res) => {
    try {
        const id = req?.params.id;
        const recipe = await collections.recipes.findOne({_id: new mongodb.ObjectId(id)});

        if (recipe) {
            res.status(200).send(recipe)
        } else {
            res.status(404).send(`No recipe with id: ${id}`);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});
```

To find a recipe with a specified id, you need to extract it from the request parameter and then use it in the query.

If something is returned from the query we return a 200 with the data, else a 404 is sent (because no recipe exists with the id). 

#### Register the routes

---

Currently, the Express server does not know about the recipe routes, so we need to help him out here.

In the `server.ts`, add before the `app.listen()` method:

**mean-stack-example-app/server/src/server.ts**

```ts
app.use("/recipes", recipeRouter);
```

Dont forget to restart your server after modifying the file!

#### Create interfaces on client

---

We already created interfaces for the server and now we need them on our client too.

If you have the question why we don't make a shared library - that's because these interfaces defer a bit.

Either create a `recipe.ts` + `ingredient.ts` file in the `src/app/` directory, or generate one with this command:

```shell
ng generate interface recipe.ts
ng generate interface ingredient.ts
```

Open up the files and add the following to them

TODO: add

Notice the difference from the server interfaces in the id attribute (it's just a string!).









