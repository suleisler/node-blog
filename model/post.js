const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:{
        tyle:String,
        require:true,
        unique:true,
    },
    desc:{
        tyle:String,
        require:true,
    },
    photo:{
        tyle:String,
        require:false, 
    },
    username:{
        tyle:String,
        require:true,
    },
    categories:{
        tyle:Array,
        require:true,
    },
},{
    timestamps:true,
}
)
module.exports=mongoose.model('Post', PostSchema)