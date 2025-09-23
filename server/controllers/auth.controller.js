const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwt_token = process.env.JWT


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            const isPassword = await bcrypt.compare(password, userExist.password);
            if (isPassword) {
                const createToken = () => {
                return jwt.sign({
                    userId: userExist._id.toString(),
                    email: userExist.email,
                    name: userExist.name,
                    isAdmin: userExist.isAdmin
                },
                    jwt_token,
                    { expiresIn: "1d" }
                )
            }
                res.status(200).json({ message: "loged in", userId: userExist._id.toString(), token: createToken() })
            }
            else {
                res.status(401).json({ message: "Email and Password Invalide" })
            }
        }
        else {
            res.status(401).json({ message: "Email and Password Invalide" })
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


const register = async (req, res) => {
    try {
        const { name, email, password, img } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(409).json({ message: "User Already Exiest" })
        }
        const hashPass = await bcrypt.hash(password, 10);
        const addUser = await User.create({ name, email, password: hashPass, img })

        if (addUser) {
            const createToken = () => {
                return jwt.sign({
                    userId: addUser._id.toString(),
                    email: addUser.email,
                    name: addUser.name,
                    isAdmin: addUser.isAdmin
                },
                    jwt_token,
                    { expiresIn: "1d" }
                )
            }
            res.status(200).json({ message: "user created", userId: addUser._id.toString(), token: createToken() });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { register, login };