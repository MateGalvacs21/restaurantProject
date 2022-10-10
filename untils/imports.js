import cors from "cors"
import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import { getClient } from "../assets/getClient.js";
import { GETmenuById, menuById } from "../routes/gets/menu.Bytype.js";
import { GETAllOrders, AllOrders } from "../routes/gets/order.all.js";
import { GETOrdersById, OrdersById } from "../routes/gets/order.ById.js";
import { delmenuById, DELETEmenuById } from "../routes/deletes/menu.delById.js";
import { delOrder, DELETEOrder } from "../routes/deletes/order.delete.js";

export {
    cors,
    express,
    dotenv,
    bodyParser,
    getClient,
    GETAllOrders,
    GETOrdersById,
    GETmenuById,
    delmenuById,
    menuById,
    AllOrders,
    OrdersById,
    DELETEmenuById,
    delOrder,
    DELETEOrder
}