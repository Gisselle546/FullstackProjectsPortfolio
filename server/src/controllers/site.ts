import { Response, Request } from 'express';
import { ISite } from './../types/site';
import { Site } from '../models/site'

const newSite = async(req: Request, res: Response) => {
    try{
        const {name, description, githuburl, url} = req.body as Pick<ISite, 'name' | 'description' | 'githuburl'| 'url'>
       
        
        if(!name || !description || !githuburl || !url ){
            return res.status(403).send('Please provide all the values')
        }

       const site: ISite = new Site({
        name,
        description,
        githuburl,
        url
       })
        const newproject: ISite = await site.save();

        res.status(200).json(newproject);

    }catch(error){
        throw error
    }
}


const getSites = async(req: Request, res: Response) => {
    try{
        const sites: ISite[] = await Site.find();
        res.status(200).json(sites)
    } catch(error){
        throw error
    }
}

const getSite = async(req: Request, res: Response) => {
    try{
        const { params: {id}} = req

        const site: ISite | null = await Site.findById({ _id: id });

        if(!site){
            return res.status(403).send('No site found')
        }

        res.status(200).json(site)


    } catch(error){
        throw error
    }
}


export {newSite, getSites, getSite}