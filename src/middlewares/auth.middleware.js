import jwt from "jsonwebtoken"

const authUser = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Token is not provided! "
        })
    }
   try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded;

    next();

   } catch (error) {
     console.error("Invalid Token: ", error)
   }


}

export default { authUser };