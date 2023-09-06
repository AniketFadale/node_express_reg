import userModel from "../models/user.js";
import bcrypt from "bcrypt"


class UserController{
    static userRegistration = async(req,res)=>{
        const {name,email,password,password_confirmation,tc}= req.body
        const user = await userModel.findOne({email:email})
        if(user){
            res.send({"status":"failed","message":"Email already exists"})
        }else{
            if(name&& email && password && password_confirmation && tc){
                if(password === password_confirmation){ 
                    try {
                        
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password,salt )
                    const doc = new userModel({
                        name:name,
                        email:email,
                        password:hashPassword,
                        tc:tc
                    })
                    await doc.save()
                    } catch (error) {
                        connsol.log(error)
                        res.send({"status":"failed","message":"Unable to  register"})
                    }
                }else{

                    res.send({"status":"failed","message":"password does not match"})
                }
            }else{
                res.send({"status":"failed","message":"Email already exists"})
            }
        }
    }
}

export default UserController;