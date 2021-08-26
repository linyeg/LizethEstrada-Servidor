import { extname } from "path";

export const customName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname)
    
    const randomName=Array(16)
    .fill(null)
    .map(()=> Math.round(Math.random()*1).toString(16))
    .join('');
    callback(null,`${name}-${randomName}${fileExtName}`)
}