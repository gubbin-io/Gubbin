import express from "express";

const router = express.Router();

router.route("/").get((req: any, res: any) => {
  res.json({
    users: ["Gregg Eggington", "John Vuuton"],
  });
});

export default router;
