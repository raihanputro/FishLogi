import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel.js';

const secret = 'test';

export const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData =  jwt.verify(token, secret);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.data;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}


