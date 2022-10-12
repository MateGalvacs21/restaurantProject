import { getClient } from "../../assets/getClient.js";
export const backupRoute = () => { return "/backup/:rid" }

export function GETBackUpData() {
    return (
        async function fun(req, res) {
            const rid = req.params.rid;
            const client = getClient();
            client.connect(async () => {
                try {
                    const collection = client.db("restaurant").collection(rid+"DATA");
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

