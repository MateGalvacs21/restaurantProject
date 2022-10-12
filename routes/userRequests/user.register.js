import { getClient } from "../../assets/getClient.js";
import { genSaltSync,hash } from "bcrypt";
export const registerRoute=()=>"/register";

export function Register(){
    return(
        async function fun(req,res){
            const client=getClient();
            const salt=genSaltSync(10);            
            const body={
                email:req.body.email,
                name:req.body.name,
                password:await hash(req.body.password, salt),
                restaurantID:req.body.restaurantID,
                isAdmin:req.body.isAdmin
            }

            client.connect(async()=>{
                try {
                    const collection = client.db("restaurant").collection("users");
                    const result = await collection.insertOne(body);
                    if (!result) {
                        res.send({ error: "insert error" });
                        return;
                    }
                    res.send("Sikeres regisztráció!");
                } catch (error) {
                    res.send(error)
                }finally{
                    client.close();
                }
            })
        }
    )
}