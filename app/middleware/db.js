import cloudinary from "./cloudinary"

export const saveImage = async (req) => {
    try{
   const result = await new Promise((resolve, reject)=>{
        const stream = cloudinary.uploader.upload_stream(
            {folder:"images"},
            (err,result) => {
                if (err) reject(err);
                else resolve(result);
            }
        );
        stream.end(req.file.buffer);
    })
    console.log("result: ", result);
    imageUrl = result.secure_url;
    console.log("image uploaded: ", imageUrl);
    return imageUrl;
    } catch(e){
        console.error("cloudinary error: ", e);
        return next(new ExpressError(500, "Error uploading image"))
    }
}