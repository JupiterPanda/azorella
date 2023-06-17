import HouseModel from '../models/house.js';

export const create = async (req, res) => {
    try 
    {
         const doc = new HouseModel({
            name: req.body.name,
            lockDate: req.body.lockDate,
            maxNumGuests: req.body.maxNumGuests,
            desc: req.body.desc,
        });

        const house = await doc.save();

        res.json(house);
        
    } catch(err) {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось создать заказ',
        })
    }
};

export const getAll = async (req, res) => {
    try {
      const houses = await HouseModel.find();

      res.json(houses);

    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить заказы',
      });
    }
};

export const getOne = async (req, res) => {
    try{
        const houseId = req.params.id;
        const house = await HouseModel.findById(houseId);

        if(!house){
          return res.status(404).json({
              message: "Заказ не найден",
          });
        };

        const { ...houseData} = house._doc;
        
        res.json({houseData});

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить заказ',
        });
    }
};

export const update = async (req, res) => {
    try{
        const houseId = req.params.id;

        await HouseModel.updateOne(
        {
            _id: houseId,
        },
        {
            name: req.body.name,
            lockDate: req.body.lockDate,
            maxNumGuests: req.body.maxNumGuests,
            desc: req.body.desc,
        },
        );

        res.json({ success: true, });

    } catch (err) {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось обновить заказ',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const houseId = req.params.id;

        await HouseModel.deleteOne({_id: houseId})
        
        .then(res.json({ success: true, }))
        
        } catch (err) {
        console.log(err);
        res.status(500).json({
          message: 'Не удалось получить заказ',
        });
    }
};