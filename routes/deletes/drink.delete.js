import { ObjectId } from "mongodb";
import { getClient } from "../../assets/getClient.js";

export const drinkdeleteRoute = () => { return "/delDrink/:rid/:id" };
export function DELETEDrink() {
    return (
        async function fun(req, res) {
            const rid=req.params.rid
            const id = new ObjectId(req.params.id);
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid+"_drinks");
                    const data = await collection.deleteOne({ _id: id });
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


