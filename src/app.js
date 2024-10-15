import express from "express";
import { categoryRouter } from "../router/category.router";
import { transactionRouter } from "../router/transaction.router";
import { userRouter } from "../router/user.router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
const port = 8000;

// app.use("/user", userRouter);
// app.use("/transaction", transactionRouter);
// app.use("/category", categoryRouter);

app.use("/testing", async (request, response) => {
  try {
    response.status(200).json({ user: "testing path" });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});
console.log("testing");
app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
