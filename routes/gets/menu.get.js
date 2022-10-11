import { ObjectId } from "mongodb";
import { getClient } from "../../assets/getClient.js";

export const menuOne = () => { return "/menu/:id" };
export function GETmenuOne() {
    return (
        async function fun(req, res) {
            
            const id = new ObjectId(req.params.id);
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection("menu");
                    const data = await collection.findOne({  _id: id })
                    res.send(data);
                } catch (error) {
                    res.send(error)
                } finally {
                    client.close();
                }
            })

        }
    )

}



