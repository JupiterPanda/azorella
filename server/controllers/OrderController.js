import OrderModel from '../models/order.js';
import HouseModel from '../models/house.js';
import mongoose from 'mongoose';

export const create = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try 
    {
        const doc = new OrderModel({
            user: req.userId,
            houseId: req.body.houseId,
            numGuests: req.body.numGuests,
            services: req.body.services,
            arrivalDate: req.body.arrivalDate,
            departureDate: req.body.departureDate,
        });
        
        var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=new Date(e);d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};

        const lockedDate = getDaysArray(req.body.arrivalDate, req.body.departureDate);
        
        const houseId = req.body.houseId;

        
            await HouseModel.updateOne(
            {
                _id: houseId,
            },
            {
                lockDate: lockedDate,
            },
            );

            const order = await doc.save();
            await session.commitTransaction();
            
        
        res.json(order);
    } catch(err) 
    {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось создать заказ',
        })
    }
    session.endSession();
};

export const getAll = async (req, res) => {
    try {
      const orders = await OrderModel.find();

      res.json(orders);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить заказы',
      });
    }
};

export const getOne = async (req, res) => {
    try{
        const orderId = req.params.id;
        const order = await OrderModel.findById(orderId);

        if(!order){
          return res.status(404).json({
              message: "Заказ не найден",
          });
        };

        const { ...orderData} = order._doc;
        
        res.json({orderData});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить заказ',});
    }
};

export const update = async (req, res) => {
    try{
        const orderId = req.params.id;

        await OrderModel.updateOne(
        {
            _id: orderId,
        },
        {
            user: req.userId,
            houseId: req.body.houseId,
            numGuests: req.body.numGuests,
            services: req.body.services,
            arrivalDate: req.body.arrivalDate,
            departureDate: req.body.departureDate,
        },
        );

        res.json({
        success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось обновить заказ',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const orderId = req.params.id;
        await OrderModel.deleteOne({_id: orderId})
        .then(res.json({
          success: true,
        }))
        
        } catch (err) {
        console.log(err);
        res.status(500).json({
          message: 'Не удалось получить заказ',
        });
    }
};

export const getUserOrders = async (req, res) => {
    try{
        const userId = req.params.id;
        const orders = await OrderModel.find({user: userId});
        if(!orders){
          return res.status(404).json({
              message: "Заказов не найдено",
          });
        };
        
        res.json({orders});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить заказ',});
    }
};

