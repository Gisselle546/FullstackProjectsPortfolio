import { Router } from 'express';
import {newSite, getSites, getSite} from '../controllers/site'
import { newMessage, getMessages } from '../controllers/message';

const router: Router = Router();


/// Return Site

router.post('/newsite', newSite);
router.get('/getsites', getSites);
router.get('/getsite', getSite);

//messages
router.post('/newmessage', newMessage);
router.get('/messages', getMessages)



//

export default router;