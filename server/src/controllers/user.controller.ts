import { NextFunction, Request, Response } from 'express';

class UserController{
    public index = (req: Request, res: Response,next:NextFunction) => {
        res.send('Hello World');
    }

    public create=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            
        } catch (error) {
            next(error);
        }
    }
}
export default UserController;