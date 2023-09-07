import express from 'express';
import { createShortUrl, getLink } from '../controller/url.controller';

const router = express.Router();

router.post('/shorten', createShortUrl);

router.get('/:shortUrl', getLink);

export default router;
