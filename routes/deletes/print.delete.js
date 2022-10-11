import { ObjectId } from "mongodb";
import { getClient } from "../../assets/getClient.js";

export const printdeleteRoute = () => { return "/delPrint/:rid/:id" };
export function DELETEPrint() {
    return (
        async function fun(req, res) {
            const rid=req.params.rid
            const id = new ObjectId(req.params.id);
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid+"_print");
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


