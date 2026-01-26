import express from 'express'
import { getUserId, getUserResumes, loginUser, registeruser } from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const userRouter=express.Router();
userRouter.post('/register',registeruser);
userRouter.post('/login',loginUser);
userRouter.get('/data',protect,getUserId);
userRouter.get('/resumes',protect,getUserResumes);

export default userRouter