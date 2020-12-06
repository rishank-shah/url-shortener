# URL Shortener

### Simple URL Shortener written in nodejs 
### Database Used - mongodb

## To run this Project

### First Clone the project
```
git clone https://github.com/rishank-shah/url-shortener.git
cd url-shortener
```

### Create a new file inside url-shortener folder named ```.env```
#### The contents of .env file are
```
MONGO_URI=<MONGO_DB_URI>
PORT=<ANY_PORT>
```

### After creating and saving the .env file you can run the project using the command
```
npm start
```

##### The website will be running on  [http://127.0.0.1:8000/](http://127.0.0.1:8000/) if no port is specified in .env file.
##### If port is specified in the .env file then the website will be running on [http://127.0.0.1:{PORT}/](http://127.0.0.1:{PORT}/)
