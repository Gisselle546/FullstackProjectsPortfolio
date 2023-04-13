import { Router } from 'express';
import {newSite, getSites, getSite} from '../controllers/site'

const router: Router = Router();


/// Return Site

router.post('/newsite', newSite);
router.post('/getsites', getSites);
router.post('/getsite', getSite);

export default router;