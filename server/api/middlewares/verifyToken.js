
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
        const token=req?.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success:"false",
            message: "You are not authorized"
        })
    }
    jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Token is not valid"
            })
        }
        req.user = decoded;
        next();
    })
}
