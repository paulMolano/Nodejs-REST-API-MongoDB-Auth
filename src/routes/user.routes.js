import { Router } from "express";
import * as userCrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  userCrl.createUser
);

export default router;
