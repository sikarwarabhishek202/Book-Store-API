const Book =require('../models/Book');

const getAllBooks=async(req,res)=>{
try{
const allBooks=await Book.find({});
if(allBooks?.length>0){
    res.status(201).json({
        success:true,
        message:" all Books Fetched succesfully",
        data:allBooks
    })
}else{
 res.status(404).json({
    success:false,
    message:" No Books Found in collection"
 })
}
}catch(e){
    console.log(e);
    res.status(500).json({
        success:false,
        message:"something went Wrong"
    })
}
}
const getSingleBookById=async(req,res)=>{
    try{
        const getCurrentBookId=req.params.id;
    const singleBook=await Book.findById(getCurrentBookId);
    if(singleBook){
        res.status(200).json({
            success:true,
            message:" One Book Fetched",
            data: singleBook
        })
    }
    else{
        return res.status(404).json({
            success:false,
            message:"book with current id is not found"
        })
    }
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"something went wrong please Check"
        })
    }
}
const addNewBook=async(req,res)=>{
    try{
      const newBookFormData=req.body;
      const newlyCreatedBook=await Book.create(req.body);
      if(newBookFormData){
        res.status(201).json({
            success:true,
            message:'book added successfully',
            data:newlyCreatedBook,
        })
      }
    }catch(e){
        console.log(e)
    }
}
const updateBook=async(req,res)=>{
    try{
    const updatedBookFormData=req.body;
    const getCurrentId=req.params.id;
    const updatedBook=await Book.findByIdAndUpdate(getCurrentId,updatedBookFormData,
    {   
        new:true,
    });
    if(!updatedBook){
        res.status(404).json({
            success:false,
            message:"book is not found with this Id",
        });
    }
    else{
        res.status(200).json({
            success:true,
            message:'book updated Successfully',
            data:updatedBook,
        })
    }
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"update operation Failed",
        })
    }
}
const deleteBook=async(req,res)=>{
    try{
        const deleteId=req.params.id;
        const deletedBook=await Book.findByIdAndDelete(deleteId);
        if(!deletedBook){
            res.status(404).json({
                success:false,
                message:"book is not found With This Id",
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:deletedBook,
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"delete operation is not performed",
        })
    }
}

module.exports={
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook,
};
