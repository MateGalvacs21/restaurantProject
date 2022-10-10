import { getClient } from "../../assets/getClient.js";
import { ObjectId } from "mongodb";

export const OrdersById = () => { return "/order/:rid/:id" }

export function GETOrdersById() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const id = ObjectId(req.params.id);

            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid);
                    const data = await collection.findOne({ _id: id });
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



