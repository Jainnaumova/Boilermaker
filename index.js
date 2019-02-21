const app = require("./server");
const { db } = require("./server/db");

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync({ force: true }).then(() => {
  console.log("The database is synced!");
  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
});
