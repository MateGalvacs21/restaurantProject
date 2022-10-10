import { ObjectId } from "mongodb";
import { getClient } from "../../assets/getClient.js";

export const delmenuById = () => { return "/delMenu/:id" };
export function DELETEmenuById() {
    return (
        async function fun(req, res) {
            const id = ObjectId(req.params.id);
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection("menu");
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


