import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import usersModel from "../models/usersModel.js";

const secret = 'test';

export const signIn = async(req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await usersModel.findOne({
            where: {
                email: req.body.email
            }    
        });

        if(!existingUser) return res.status(404).json({message: "Email belum terdaftar, silahkan ke halaman Daftar!"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Password salah! silahkan masukkan password yang benar!"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser.id}, secret, {expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: "Tidak dapat masuk!"});
        console.log(error);
    }
}

export const signUp = async(req, res) => {
    const { name, email, password, confirmPassword} = req.body;
    
    try {
        const existingUser = await usersModel.findOne({ 
            where: {
                email: req.body.email
            }
        });
    
        if(existingUser) return res.status(400).json({ message: "Email sudah terdaftar, silahkan ke halaman Masuk!" });
    
        if(password !== confirmPassword) return res.status(400).json({ message: "Konfirmasi password tidak sama, silahkan ulangi password dengan benar!" });
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await usersModel.create({ 
            name: name, 
            email: email, 
            password: hashedPassword
        });

        const token = jwt.sign({ email: result.email, id: result.id}, secret, {expiresIn:"1h"});

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Tidak dapat daftar!"});
        console.log(error);
    }
}

