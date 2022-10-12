import { getClient } from "../../assets/getClient.js";
import { ObjectId } from "mongodb";

export const menuputRounte = () => { return "/menu/update/:id" };

export function PUTMenu() {
    return (
        async function fun(req, res) {
            const body = {
                name: req.body.name,
                nickname: req.body.nickname,
                items: req.body.items,
                price: req.body.price,
                restaurantID: req.body.rid,
                type: req.body.type,
                afa: req.body.afa
            }
            const id=new ObjectId(req.params.id);
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection("menu");
                    const result = await collection.findOneAndUpdate({_id:id},{$set:body});
                    if (!result) {
                        res.send({ error: "insert error" });
                        return;
                    }
                    res.send(result);
                } catch (error) {
                    res.send(error)
                } finally {
                    client.close();
                }
            })

        }
    )

}


