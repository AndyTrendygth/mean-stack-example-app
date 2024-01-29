# The MEAN Stack: A starters guide

## What this project is about

As a required hand-in for our software-engineering lesson, I developed an example MEAN-App and wrote a technical paper about it. The paper is located inside the `mean-stack-starters-guide` folder.

### The app

I decided to code a recipe book (a really simple crud app), where you can view, edit, create and delete recipes.

## How to run the project

### Setup MongoDB Docker container

In your terminal:

```
docker pull mongo:latest
```

```
docker run -d -p 27017:27017 --name=mean-stack-example-mongodb -e
MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
```

Then, open your favorite database manager and create a database and collection:

```
use('test');
db.createCollection('recipes');
```

### Start Backend

```
cd server
npm i
npx ts-node src/server.ts
```

### Start Frontend

```
cd ..
cd client
npm i
ng serve
```

Made w ❤️ by Andreas Krenn
