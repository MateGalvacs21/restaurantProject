import { getClient } from "../../assets/getClient.js";
import { ObjectId } from "mongodb";

export const drinkputRounte = () => { return "/drinks/update/:rid/:id" };

export function PUTDrink() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const id=new ObjectId(req.params.id)
            const body = {
                nameoftype: req.body.nameoftype,
                items: req.body.items,
                afa: req.body.afa
            }
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid + "_drinks");
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


