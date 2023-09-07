import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync';
import shortid from 'shortid';
import Url from '../models/url.model'

/**
 * @description Shorten a long URL
 * @route POST /api/shorten
 * @access Public
 * @type POST
 */
export const createShortUrl = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { originalUrl } = req.body;

    try {
        if (!originalUrl) {
            return res.status(400).json({
                status: false,
                message: 'Please provide a valid URL.'
            });
        }

        const existingUrl = await Url.findOne({ originalUrl });

        if (existingUrl) {
            return res.status(404).json({
                status: false,
                message: 'URL not found.'
            });
        }

        const shortUrl = shortid.generate();
        const newUrl = new Url({ originalUrl, shortUrl });

        await newUrl.save();
        
        res.status(201).json({
            status: true,
            message: 'URL shortened successfully.',
            data: newUrl,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
});

/**
 * @description Access a shortened URL and redirect to the original URL
 * @route GET /:shortUrl
 * @access Public
 * @type GET
 */
export const getLink = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { shortUrl } = req.params;

    try {
        const url = await Url.findOne({ shortUrl });

        if (!url) {
            return res.status(404).json({
                status: false,
                message: 'URL not found.'
            });
        }

        // Redirect to the original URL
        res.redirect(url.originalUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'Internal Server Error',
        });
    }
});
