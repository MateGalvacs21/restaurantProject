
import { getClient } from "../../assets/getClient.js";

export const menuById = () => { return "/menu/:id/:type" };
export function GETmenuById() {
    return (
        async function fun(req, res) {
            const id = req.params.id;
            const type = req.params.type;
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection("menu");
                    const data = await collection.find({ restaurantID: id, type: type }).toArray();
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




