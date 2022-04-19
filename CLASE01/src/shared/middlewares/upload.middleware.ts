import multer from "multer";
import multer_s3 from "multer-s3";
import AWS from "aws-sdk";
import yenv from "yenv";
import { IError } from '../helpers/errors.helps';
import { Request } from "express";
import { IUpload } from '../interface/upload.interface';
import { UploadOptions } from "@shared/application/upload-builder";



const S3 = new AWS.S3();
const env = yenv();

export class UploadMiddleware{
    // un solo archivo o una coleccion
    // multer devuelve un metodo que devuelve un middleware

    

    static S3(


        options:UploadOptions

       /*  options:IUpload */
        
       /*  fieldName:string, maxFileSize:number = 2000000,
        directory:string = "",
        isPublic:boolean = false,
        ...mimeTypesAllowed:string[] */
        ){


          return multer(
              {limits: {fileSize:options.maxFileSize},
               storage: multer_s3({
                   s3: S3,
                   bucket: env.S3.bucketName,
                   acl: options.isPublic ? "public-read" : "",
                   metadata(req , file , cb){
                       cb(null, {fieldName: file.fieldname})
                   },
                   key(req:Request, file, cb){
                        const mimeType = file.mimetype;
                        const isFileAllowed = options.mimeTypesAllowed.includes(mimeType);

                        const fileSize = file.size;

                        if(fileSize> options.maxFileSize){
                            const error:IError = new Error("File too LARGE")
                    
                            error.status = 422
                            return cb(error, null)
                        }

                        if(!isFileAllowed){
                            const error:IError = new Error("File Type not ALLOWED")
                            error.code = "LIMIT_FILE_TYPESS"
                            error.status = 422
                            return cb(error, null)
                        }

                        const partsFile = file.originalname.split(".") //name.extension
                        const newName = Date.now().toString()
                        const extension = partsFile[partsFile.length - 1]
                        const newFileName = `${options.directory}/${newName}.${extension}`
                        req.body[options.fieldName] = newFileName
                        cb(null, newFileName) // que no hat errores

                   }
               })
             }
         ).single(options.fieldName);

         // .array(options.fieldName) conjunto de fotos postman
         // .fields(["photo","cv"])  fotos e imagenes postman
        

    }

    

}