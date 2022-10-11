import { getClient } from "../../assets/getClient.js";

export const menupostRounte = () => { return "/menu/add" };

export function POSTMenu() {
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
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection("menu");
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


