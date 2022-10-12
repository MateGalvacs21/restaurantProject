import { getClient } from "../../assets/getClient.js";

export const orderputRounte = () => { return "/orders/update/:rid/:id" };

export function PUTOrder() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const id = req.params.id;
            const body = {
                
                items: req.body.items,
                amount: req.body.amount,
                amountofAfa27:req.body.afa27,
                amountofAfa5:req.body.afa5
            }
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid + "_orders");
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


