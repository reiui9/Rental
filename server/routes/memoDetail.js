import express from 'express';
import Memo from '../models/memo';

const router = express.Router();

/*
    READ MEMO DETAIL OF A USER: GET /api/memoDetail/:dataid
*/
router.get('/:name', (req, res) => {
    Memo.find({writer : req.params.name})
    .sort({"_id": -1})
    .exec((err, memos) => {
        if(err) throw err;
        res.json(memos);
    });
});

export default router;

