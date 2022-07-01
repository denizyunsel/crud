import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

let users=[];






router.get("/",(req,res)=>{
    res.send(users);

});

router.get("/:id",(req,res)=>{
    const id =req.params.id;
    const foundUser=users.find((user)=>user.id==id);
    res.send(foundUser);
});

router.post("/",(req,res)=>{
    const user=req.body;

    const Id=uuidv4();
    const userId={...user,id:Id};


    users.push(userId)


   res.send(userId);

});
router.delete("/:id", (req, res) => {
    const id = req.params.id;

   let index= users.indexOf(id);
   console.log(index);
   if(index>-1){
       users.splice(index,1);
       res.send(users);
   }

  else{
       res.status(404);
       res.send("error");

   }




});

router.patch("/:id", (req, res) => {
    const id = req.params.id;


    const user = users.find((user) => user.id == id);
    if(user) {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let city = req.body.city;

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (city) user.city = city;

        res.send(users);
    }
    else{
        res.status(404);
        res.send("error");
    }
});


export default router;

