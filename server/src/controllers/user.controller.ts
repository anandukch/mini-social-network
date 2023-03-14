import { NextFunction, Request, Response } from 'express';

class UserController{
    public index = (req: Request, res: Response,next:NextFunction) => {
        res.send('Hello World');
    }
}
export default UserController;