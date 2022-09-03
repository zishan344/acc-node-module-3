// tools api
const express = require("express");
const router = express.Router();

/* router.get("/api/v1/tools", async (req, res) => {
    const query = {};
    const result = await toolsCollection.find(query).toArray();
    res.send(result);
  });  */

/* app.post("/tools", async (req, res) => {
    const tools = req.body;
    const result = await toolsCollection.insertOne(tools);
    res.send(result);
  });
 */
/* app.get("/tools/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await toolsCollection.findOne(query);
    res.send(result);
  }); */
/* app.delete("/tools/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await toolsCollection.deleteOne(query);
  res.send(result);
}); */

router
  .get("/", (req, res) => {
    res.send("api geting success");
  })
  .post("/", (req, res) => {
    const tools = req.body;
    // const result = await toolsCollection.insertOne(tools);
    res.send({ post: "Post Success" });
  })
  .get("/:id", (req, res) => {
    res.send("product id finding successfully");
  })
  .delete("/:id", (req, res) => {
    res.send("delete product successfully");
  });
/* router.get("/", (req, res) => {
  res.send("Hallo bangladesh");
}); */
module.exports = router;
