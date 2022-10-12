import { getClient } from "../../assets/getClient.js";

export const drinkpostRounte = () => { return "/drinks/add/:rid" };

export function POSTDrink() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const body = {
                nameoftype: req.body.nameoftype,
                items: req.body.items,
                afa: req.body.afa
            }
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid + "_drinks");
                    const result = await collection.insertOne(body);
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


