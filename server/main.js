import express from "express";
import Startup from "./Startup";
import DbContext from "./db/DbConfig";

//create server & socketServer
const app = express();
const port = process.env.PORT || 3000;

//Establish Socket
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
// FIXME Actually connect to a database
DbContext.connect();

//Start Server
app.listen(port, () => {
  console.log("Server running on port:", port);
});