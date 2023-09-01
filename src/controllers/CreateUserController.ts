import {Request, Response } from 'express'; 
import prismaClient from '../database/prismaClient';

export class CreateUserController  {
    async handle(request : Request, response: Response) {

        console.log(request)

        const {name, email, password, lojas } =  request.body
        const user = await prismaClient.user.create({
            data : {
                email,
                name,
                password,
                lojas: lojas
            }
        })

        return response.json(user); 
    }
}


