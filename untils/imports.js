import cors from "cors"
import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import { getClient } from "../assets/getClient.js";
import { GETmenuById, menuById } from "../routes/gets/menu.get.type.js";
import { GETAllOrders, AllOrders } from "../routes/gets/order.get.all.js";
import { GETOrdersById, OrdersById } from "../routes/gets/order.get.js";
import { delmenuById, DELETEmenuById } from "../routes/deletes/menu.delete.js";
import { delOrder, DELETEOrder } from "../routes/deletes/order.delete.js";
import { printDataRoute, GETPrintData } from "../routes/gets/printData.get.js";
import { menuOne, GETmenuOne } from "../routes/gets/menu.get.js";
import { AllDrinks, GETAllDrink } from "../routes/gets/drinks.get.all.js";
import { DrinkOne, GETDrinkOne } from "../routes/gets/drinks.get.js";
import { backupRoute,GETBackUpData } from "../routes/gets/backup.get.js";
import { drinkdeleteRoute,DELETEDrink } from "../routes/deletes/drink.delete.js";
import { printdeleteRoute,DELETEPrint } from "../routes/deletes/print.delete.js";
import { menupostRounte,POSTMenu } from "../routes/posts/menu.post.js";
import { drinkpostRounte,POSTDrink } from "../routes/posts/drink.post.js";
import { POSTOrder,orderpostRounte } from "../routes/posts/order.post.js";
import { printpostRounte,POSTPrint } from "../routes/posts/printData.post.js";
export {
    cors,express,dotenv,bodyParser,getClient,GETAllOrders,GETOrdersById,GETmenuById,
    delmenuById,menuById,AllOrders,OrdersById,DELETEmenuById,delOrder,DELETEOrder,
    printDataRoute,GETPrintData,menuOne,GETmenuOne,GETAllDrink,AllDrinks,DrinkOne,
    GETDrinkOne,backupRoute,GETBackUpData,DELETEDrink,drinkdeleteRoute,printdeleteRoute,
    DELETEPrint,menupostRounte,POSTMenu,drinkpostRounte,POSTDrink,POSTOrder,orderpostRounte,
    printpostRounte,POSTPrint 
}