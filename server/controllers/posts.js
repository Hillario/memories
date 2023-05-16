import postMessage from '../models/postMessage.js';

//all the handlers for our routes
export const getPosts = async (req, res) => {
    try {
        //this is an asynchronous action that's why we add await
        const postMessages = await  postMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = (req, res) => {
    res.send('Post Creation');
}