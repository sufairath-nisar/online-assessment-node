import { generateToken } from "./utils/generateToken.js";
import User from "./userModel.js";

export const addParameters = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
      const {
        username,
        one,
        two
      } = req.body;
    
      // if (parameterOne === undefined || parameterTwo === undefined) {
      //   return res.status(400).send("parameterOne and parameterTwo are required");
      // }
  
  
      const addParameters = new User({
        username,
        one,
        two
        
      });
      console.log("addParameters",addParameters)
     
  
      const newCreated = await addParameters.save();
      if (!newCreated) {
        return res.status(500).send("Failed to add parameters");
      }
  
      console.log('New Order Created:', newCreated);
      const token = generateToken(username);   
      res.cookie("token", token)
      return res.status(200).json(newCreated);
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).send("Failed to add  details");
    }
  };
  