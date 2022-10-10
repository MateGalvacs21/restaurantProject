import { ObjectId } from "mongodb";
import { getClient } from "../../assets/getClient.js";

export const delOrder = () => { return "/delOrder/:rid/:id" };
export function DELETEOrder() {
    return (
        async function fun(req, res) {
            const id = ObjectId(req.params.id);
            const rid = req.params.rid;
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid);
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


