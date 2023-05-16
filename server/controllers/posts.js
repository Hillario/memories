import postMessage from '../models/postMessage.js';

//all the handlers for our routes
//https://www.restapitutorial.com/httpstatuscodes.html --> http status codes
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

export const createPosts = async (req, res) => {
    //with post requests, access to req.body is given
    //get data from forms in the front end
    const post = req.body;

    //create a new post
    const newPost = postMessage(post);
    try {

        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}