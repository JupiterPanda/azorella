import ServiceModel from '../models/service.js';

export const create = async (req, res) => {
    try 
    {
         const doc = new ServiceModel({
            title: req.body.title,
            price: req.body.price,
            desc: req.body.desc,
        });

        const service = await doc.save();

        res.json(service);
    }
    catch(err) 
    {
        console.log(err);
        res.status(500).json({
        message: 'Не удалось создать заказ',
        })
    }
};

export const getAll = async (req, res) => {
    try {
      const services = await ServiceModel.find();

      res.json(services);

    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось получить заказы',
      });
    }
};

export const getOne = async (req, res) => {
    try{
        const serviceId = req.params.id;
        const service = await ServiceModel.findById(serviceId);

        if(!service){
          return res.status(404).json({
              message: "Заказ не найден",
          });
        };

        const { ...serviceData} = service._doc;
        
        res.json({serviceData});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Не удалось получить заказ',});
    }
};

export const update = async (req, res) => {
    try{
        const serviceId = req.params.id;

        await ServiceModel.updateOne(
        {
            _id: serviceId,
        },
        {
            name: req.name,
            price: req.body.price,
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
        const serviceId = req.params.id;

        await ServiceModel.deleteOne({_id: serviceId})
        .then(res.json({ success: true, }))
        
        } catch (err) {
        console.log(err);
        res.status(500).json({
          message: 'Не удалось получить заказ',
        });
    }
};