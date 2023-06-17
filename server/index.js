import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as valids from './validations.js';
import checkAuth from './utils/checkAuth.js';
import checkAdmin from './utils/checkAdmin.js';
import {UserController, OrderController, ServiceController, HouseController} from './controllers/controllers.js';

mongoose.connect('mongodb+srv://GlobalUser:GlobalPassword2431@azorelladb.xqm7iii.mongodb.net/azorella').then(() => 
console.log('DB ok')).catch((err) => 
console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(cors());

//Авторизация пользователя
app.post('/user/login', valids.loginValidation, UserController.login);

//Регистрация пользователя
app.post('/user/register', valids.registerValidation, UserController.register);

//Получение информации об активном пользователе
app.get('/user/me', checkAuth, UserController.getMe);

//Получение всех пользователей
app.get('/user', checkAdmin, checkAuth, UserController.getAll);

//Получение конкретного пользователя
app.get('/user/:id', checkAuth, UserController.getOne);

//Удаление конкретного пользователя
app.delete('/user/:id', checkAuth, UserController.remove);

//Обновление пользователя
app.patch('/user/:id', checkAuth, UserController.update);

//Получение заказов пользователя
app.get('/user/orders/:id', checkAuth, OrderController.getUserOrders);

//Добавление заказа
app.post('/order', checkAuth, valids.orderCreateValidation, OrderController.create);

//Просмотр всех заказов
app.get('/order', checkAuth, OrderController.getAll);

//Просмотр конкретного заказа
app.get('/order/:id', checkAuth, OrderController.getOne);

//Удаление заказа
app.delete('/order/:id', checkAuth, OrderController.remove);

//Обновление заказа
app.patch('/order/:id', checkAuth, OrderController.update);

//Добавление сервиса
app.post('/service', checkAuth, valids.orderCreateValidation, ServiceController.create);

//Получение всех сервисов
app.get('/service', checkAuth, ServiceController.getAll);

//Получение конкретного сервиса
app.get('/service/:id', checkAuth, ServiceController.getOne);

//Удаление сервиса
app.delete('/service/:id', checkAuth, ServiceController.remove);

//Обновление сервиса
app.patch('/service/:id', checkAuth, ServiceController.update);

//Добавление домика
app.post('/house', checkAuth, valids.houseCreateValidation, HouseController.create);

//Получение всех домиков
app.get('/house', checkAuth, HouseController.getAll);

//Получение однго домика
app.get('/house/:id', checkAuth, HouseController.getOne);

//Удаление домика
app.delete('/house/:id', checkAuth, HouseController.remove);

//Обновление домика
app.patch('/house/:id', checkAuth, HouseController.update);

app.listen(4444, (err) =>
 {
    if (err) {return console.log(err);}
    console.log('Server OK');
});
