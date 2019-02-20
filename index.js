const app = require("./server/index");

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
