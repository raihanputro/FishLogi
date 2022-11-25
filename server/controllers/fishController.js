import fishModel from "../models/fishModel.js";

export const getFishes = async(req, res) => {
    try {
        const fishes = await fishModel.findAll();

        res.status(200).json( fishes );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFish = async(req, res) => {
    try {
        const fish = await fishModel.findOne({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json( fish );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFishPost =  async(req, res) => {
    try {
        const newFishPost = await fishModel.create(req.body);

        res.status(201).json(newFishPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFishPost =  async(req, res) => {
    try {
        const id = req.params.id;

       await fishModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({ message: `Postingan ikan dengan id ${id}, telah berhasil di update!`});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteFishPost = async(req, res) => {
    try {
        const id = req.params.id;

        const deleteFishPost = await fishModel.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: `Postingan ikan dengan id ${id} berhasil di hapus!`})
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}