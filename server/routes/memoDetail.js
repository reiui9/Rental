import express from 'express';
import Memo from '../models/memo';

const router = express.Router();

/*
    READ MEMO DETAIL OF A USER: GET /api/memoDetail/:dataid
*/
router.get('/:dataid', (req, res) => {
    Memo.find({_id: req.params.dataid})
    .sort({"_id": -1})
    .limit(1)
    .exec((err, memos) => {
        if(err) throw err;
        res.json(memos);
    });
});

export default router;
