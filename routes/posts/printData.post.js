import { getClient } from "../../assets/getClient.js";

export const printpostRounte = () => { return "/print/add/:rid" };

export function POSTPrint() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const body = {
                _id:req.body.id,
                items: req.body.items,
                
            }
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid + "_print");
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


