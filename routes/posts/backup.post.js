import { getClient } from "../../assets/getClient.js";

export const backuppostRounte = () => { return "/backup/add/:rid" };

export function POSTBackUp() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const body = {
                _id:req.body.id,
                items: req.body.items,
                amount: req.body.amount,
                amountofAfa27:req.body.afa27,
                amountofAfa5:req.body.afa5,
                date:new Date().now(),
                paymentType:req.body.paymentType
            }
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid + "DATA");
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


