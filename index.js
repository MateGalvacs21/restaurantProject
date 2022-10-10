//imports from untils/imports
import * as untils from "./untils/imports.js";
//#################################################################

//SETUP
const app = untils.express();
app.use(untils.cors({origin: '*'}));
untils.dotenv.config();
app.use(untils.bodyParser.json());
app.use(untils.express.json());
//#################################################################

//GET requests
app.get(untils.menuById(), untils.GETmenuById());
app.get(untils.AllOrders(), untils.GETAllOrders());
app.get(untils.OrdersById(), untils.GETOrdersById())
//#################################################################

//DELETE requests
app.delete(untils.delmenuById(), untils.DELETEmenuById());
app.delete(untils.delOrder(), untils.DELETEOrder());
//#################################################################

//StartUP server listen at 5500
app.listen(5500,()=>{console.log("Server is running at 5500 ports")});
//#################################################################