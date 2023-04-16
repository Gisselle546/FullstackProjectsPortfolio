import { Router } from 'express';
import {newSite, getSites, getSite} from '../controllers/site'

const router: Router = Router();


/// Return Site

router.post('/newsite', newSite);
router.get('/getsites', getSites);
router.get('/getsite', getSite);

export default router;