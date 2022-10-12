//imports from untils/imports
import * as untils from "./untils/imports.js";
//#################################################################

//SETUP
const app = untils.express();
app.use(untils.cors({ origin: '*' }));
untils.dotenv.config();
app.use(untils.bodyParser.json());
app.use(untils.express.json());
//#################################################################

//GET requests
app.get(untils.menuById(), untils.GETmenuById());
app.get(untils.AllOrders(), untils.GETAllOrders());
app.get(untils.OrdersById(), untils.GETOrdersById());
app.get(untils.printDataRoute(), untils.GETPrintData());
app.get(untils.menuOne(), untils.GETmenuOne());
app.get(untils.AllDrinks(), untils.GETAllDrink());
app.get(untils.DrinkOne(), untils.GETDrinkOne());
app.get(untils.backupRoute(), untils.GETBackUpData());
//#################################################################

//DELETE requests
app.delete(untils.delmenuById(), untils.DELETEmenuById());
app.delete(untils.delOrder(), untils.DELETEOrder());
app.delete(untils.drinkdeleteRoute(), untils.DELETEDrink());
app.delete(untils.printdeleteRoute(), untils.DELETEPrint());
//#################################################################

//POST requests
app.post(untils.menupostRounte(),untils.bodyParser.json(),untils.POSTMenu());
app.post(untils.drinkpostRounte(),untils.bodyParser.json(),untils.POSTDrink());
app.post(untils.orderpostRounte(),untils.bodyParser.json(),untils.POSTOrder());
app.post(untils.orderpostRounte(),untils.bodyParser.json(),untils.POSTOrder());
app.post(untils.backuppostRounte(),untils.bodyParser.json(),untils.POSTBackUp());
app.post(untils.registerRoute(),untils.bodyParser.json(),untils.Register());
app.post(untils.loginRoute(),untils.bodyParser.json(),untils.Login());
//#################################################################

//PUT requets
app.put(untils.menuputRounte(),untils.bodyParser.json(),untils.PUTMenu());
app.put(untils.drinkputRounte(),untils.bodyParser.json(),untils.PUTDrink());
app.put(untils.orderputRounte(),untils.bodyParser.json(),untils.PUTOrder());
//#################################################################

//StartUP server listen at 5500
app.listen(5500, () => { console.log("Server is running at 5500 ports") });
//#################################################################