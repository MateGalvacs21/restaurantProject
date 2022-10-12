import { getClient } from "../../assets/getClient.js";
import { compare } from "bcrypt";

export const loginRoute=()=>"/Login";

export function Login(){
    return(
        async function fun(req,res){
            const {email,password}=req.body;
            const client= getClient();
            client.connect(async ()=>{
                try {
                    const collection = client.db("restaurant").collection("users");
                    const user = await collection.findOne({email:email});
                    if (!user) {
                        res.send({ error: "Ilyen email-el nincs felhasználó" });
                        return;
                    }
                    if(user&&(await compare(password,user.password))){
                        res.status(201).json({
                            name:user.name,
                            restaurantID:user.restaurantID,
                            email:user.email,
                            isAdmin:user.isAdmin,
                            message:"Sikeres bejelentkezés!"

                        })
                    }
                    else{
                        res.status(404).json({
                            message:"Hibás név vagy jelszó!"
                        })
                    }

                    
                } catch (error) {
                    res.send(error)
                }finally{
                    client.close();
                }
            })
        }
    )
}