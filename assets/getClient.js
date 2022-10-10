import { MongoClient, ServerApiVersion } from "mongodb";
export const getClient = () => {
    const uri = process.env.LINK;
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
}