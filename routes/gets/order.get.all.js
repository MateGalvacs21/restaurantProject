import { getClient } from "../../assets/getClient.js";
export const AllOrders = () => { return "/orders/:id" }

export function GETAllOrders() {
    return (
        async function fun(req, res) {
            const id = req.params.id;
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(id+"_orders");
                    const data = await collection.find().toArray();
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



