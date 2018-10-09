import express from 'express';
import account from './account';
import memo from './memo';
import memoDetail from './memoDetail';

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/account', account);
router.use('/memo', memo);
router.use('/memoDetail', memoDetail);

export default router;
