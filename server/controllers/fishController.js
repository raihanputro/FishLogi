import fishesModel from "../models/fishesModel.js";

export const getFishes = async(req, res) => {
    try {
        const fishes = await fishesModel.findAll();

        res.status(200).json( fishes );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFish = async(req, res) => {
    try {
        const fish = await fishesModel.findOne({
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
        await fishesModel.create(req.body);

        res.status(201).json(newFishPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFishPost =  async(req, res) => {
    try {
       const updatedFishPost = await fishesModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.json(updatedFishPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteFishPost = async(req, res) => {
    try {
        const deleteFishPost = await fishesModel.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json(deleteFishPost)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}