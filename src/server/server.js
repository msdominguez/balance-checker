const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:4200",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("."));

const MongoClient = require("mongodb").MongoClient;
const dbUser = "balancecheckertestdb";
const dbPw = "testserver";
const uri = `mongodb+srv://${dbUser}:${dbPw}@cluster0.wabtt.mongodb.net/BalanceChecker?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/getBalance", async (req, resp) => {
  let collection = await client
    .db("BalanceChecker")
    .collection("UserInfo")
    .aggregate([
      {
        $project: {
          userInfo: {
            $filter: {
              input: "$userInfo.account",
              as: "infoObject",
              cond: { $eq: ["$$infoObject.cardNumber", req.query.cardNumber] },
            },
          },
        },
      },
    ])
    .toArray();
  const balance = collection[0]?.userInfo[0]?.balance || "";
  return resp.json(balance);
});

client.connect((err) => {
  if (err) {
    process.exit(100);
  }
  app.listen(process.env.PORT || 1337);
});
