import { signupdata,logindata } from '../controler/usercontroler.js';
import  express  from 'express';

const router=express.Router();

router.post("/login",logindata)
router.post("/signup",signupdata)

export default router;