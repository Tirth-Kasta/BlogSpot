const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const jwt_token = process.env.JWT

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (token) {
            const isVerifide = jwt.verify(token, jwt_token);
            if (isVerifide) {
                next();
            }
            else{
                return res.status(500).json({ message: "No Verified Token" })
            }
        }
        else {
            return res.status(500).json({ message: "No Token Found" })
        }

    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = authMiddleware