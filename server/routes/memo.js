import express from 'express';
import Memo from '../models/memo';
import mongoose from 'mongoose';

const router = express.Router();

/*
    WRITE MEMO: POST /api/memo
    BODY SAMPLE: { contents: "sample "}
    ERROR CODES
        1: NOT LOGGED IN
        2: EMPTY CONTENTS
*/
router.post('/', (req, res) => {
<<<<<<< HEAD
  // CHECK LOGIN STATUS
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 1
    });
  }

  // CHECK CONTENTS VALID
  if (typeof req.body.contents !== 'string') {
    return res.status(400).json({
      error: 'EMPTY CONTENTS',
      code: 2
=======
    // CHECK LOGIN STATUS
    if(typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            error: "NOT LOGGED IN",
            code: 1
        });
    }
/*
    // CHECK CONTENTS VALID
    if(typeof req.body.contents !== 'string') {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }

    if(req.body.contents === "") {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }
*/
    // CREATE NEW MEMO
    let memo = new Memo({
        writer: req.session.loginInfo.username,
        name : req.body.name ,
        category : req.body.category ,
        contents : req.body.contents ,
        tumbnail : req.body.tumbnail ,
        image : req.body.image ,
        deliveryMethod : req.body.deliveryMethod,
        price : req.body.price
>>>>>>> origin/list_ui
    });
  }

  if (req.body.contents === '') {
    return res.status(400).json({
      error: 'EMPTY CONTENTS',
      code: 2
    });
  }

  // CREATE NEW MEMO
  let memo = new Memo({
    writer: req.session.loginInfo.username,
    name: req.body.name,
    category: req.body.category,
    contents: req.body.contents,
    tumbnail: req.body.tumbnail,
    image: req.body.image,
    deliveryMethod: req.body.deliveryMethod,
    price: req.body.price
  });

  // SAVE IN DATABASE
  memo.save(err => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

/*
    MODIFY MEMO: PUT /api/memo/:id
    BODY SAMPLE: { contents: "sample "}
    ERROR CODES
        1: INVALID ID,
        2: EMPTY CONTENTS
        3: NOT LOGGED IN
        4: NO RESOURCE
        5: PERMISSION FAILURE
*/
router.put('/:id', (req, res) => {
  // CHECK MEMO ID VALIDITY
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 1
    });
  }

<<<<<<< HEAD
  // CHECK CONTENTS VALID
  if (typeof req.body.contents !== 'string') {
    return res.status(400).json({
      error: 'EMPTY CONTENTS',
      code: 2
    });
  }

  if (req.body.contents === '') {
    return res.status(400).json({
      error: 'EMPTY CONTENTS',
      code: 2
    });
  }
=======
    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code: 1
        });
    }
/*
    // CHECK CONTENTS VALID
    if(typeof req.body.contents !== 'string') {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }
>>>>>>> origin/list_ui

  // CHECK LOGIN STATUS
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 3
    });
  }

  // FIND MEMO
  Memo.findById(req.params.id, (err, memo) => {
    if (err) throw err;

    // IF MEMO DOES NOT EXIST
    if (!memo) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 4
      });
    }
<<<<<<< HEAD

    // IF EXISTS, CHECK WRITER
    if (memo.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 5
      });
    }

    // MODIFY AND SAVE IN DATABASE

    memo.date.edited = new Date();
    memo.is_edited = true;
=======
*/
    // CHECK LOGIN STATUS
    if(typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            error: "NOT LOGGED IN",
            code: 3
        });
    }

    // FIND MEMO
    Memo.findById(req.params.id, (err, memo) => {
        if(err) throw err;

        // IF MEMO DOES NOT EXIST
        if(!memo) {
            return res.status(404).json({
                error: "NO RESOURCE",
                code: 4
            });
        }

        // IF EXISTS, CHECK WRITER
        if(memo.writer != req.session.loginInfo.username) {
            return res.status(403).json({
                error: "PERMISSION FAILURE",
                code: 5
            });
        }

        // MODIFY AND SAVE IN DATABASE
        memo.date.edited = new Date();
        memo.is_edited = true;

		if ('name' in req.body){
			name = req.body.name;
		}
		if ('category' in req.body){
			category = req.body.category;
		}
		if ('tumbnail' in req.body){
			tumbnail = req.body.tumbnail;
		}
		if ('image' in req.body){
			image = req.body.image;
		}
		if ('deliveryMethod' in req.body){
			deliveryMethod = req.body.deliveryMethod;
		}
		if ('borrower' in req.body){
			borrower = req.session.loginInfo.username;
		}

        contents = req.body.contents;
        tumbnail = req.body.tumbnail;
        image = req.body.image;

        deliveryMethod = req.body.deliveryMethod;
		borrower = req.body.borrower;

        memo.save((err, memo) => {
            if(err) throw err;
            return res.json({
                success: true,
                memo
            });
        });
>>>>>>> origin/list_ui

    if ('name' in req.body) {
      name = req.body.name;
    }
    if ('category' in req.body) {
      category = req.body.category;
    }
    if ('tumbnail' in req.body) {
      tumbnail = req.body.tumbnail;
    }
    if ('image' in req.body) {
      image = req.body.image;
    }
    if ('deliveryMethod' in req.body) {
      deliveryMethod = req.body.deliveryMethod;
    }
    if ('borrower' in req.body) {
      borrower = req.body.borrower;
    }

    memo.save((err, memo) => {
      if (err) throw err;
      return res.json({
        success: true,
        memo
      });
    });
  });
});

/*
    DELETE MEMO: DELETE /api/memo/:id
    ERROR CODES
        1: INVALID ID
        2: NOT LOGGED IN
        3: NO RESOURCE
        4: PERMISSION FAILURE
*/
router.delete('/:id', (req, res) => {
  // CHECK MEMO ID VALIDITY
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 1
    });
  }

  // CHECK LOGIN STATUS
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 2
    });
  }

  // FIND MEMO AND CHECK FOR WRITER
  Memo.findById(req.params.id, (err, memo) => {
    if (err) throw err;

    if (!memo) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 3
      });
    }
    if (memo.writer != req.session.loginInfo.username) {
      return res.status(403).json({
        error: 'PERMISSION FAILURE',
        code: 4
      });
    }

    // REMOVE THE MEMO
    Memo.remove({ _id: req.params.id }, err => {
      if (err) throw err;
      res.json({ success: true });
    });
  });
});

/*
    READ MEMO: GET /api/memo
*/
router.get('/', (req, res) => {
  Memo.find()
    .sort({ _id: -1 })
    .limit(6)
    .exec((err, memos) => {
      if (err) throw err;
      res.json(memos);
    });
});

/*
<<<<<<< HEAD
    READ MEMO: GET /api/memo
*/
router.get('/:category', (req, res) => {
  console.log(req.params.category);
  Memo.find({ category: req.params.category })
    .sort({ _id: -1 })
    .limit(6)
    .exec((err, memos) => {
      if (err) throw err;
      res.json(memos);
    });
});

/*
=======
>>>>>>> origin/list_ui
    READ ADDITIONAL (OLD/NEW) MEMO: GET /api/memo/:listType/:id
*/
router.get('/:listType/:id', (req, res) => {
  let listType = req.params.listType;
  let id = req.params.id;

  // CHECK LIST TYPE VALIDITY
  if (listType !== 'old' && listType !== 'new') {
    return res.status(400).json({
      error: 'INVALID LISTTYPE',
      code: 1
    });
  }

  // CHECK MEMO ID VALIDITY
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 2
    });
  }

  let objId = new mongoose.Types.ObjectId(req.params.id);

  if (listType === 'new') {
    // GET NEWER MEMO
    Memo.find({ _id: { $gt: objId } })
      .sort({ _id: -1 })
      .limit(6)
      .exec((err, memos) => {
        if (err) throw err;
        return res.json(memos);
      });
  } else {
    // GET OLDER MEMO
    Memo.find({ _id: { $lt: objId } })
      .sort({ _id: -1 })
      .limit(6)
      .exec((err, memos) => {
        if (err) throw err;
        return res.json(memos);
      });
  }
});

/*
    TOGGLES STAR OF MEMO: POST /api/memo/star/:id
    ERROR CODES
        1: INVALID ID
        2: NOT LOGGED IN
        3: NO RESOURCE
*/
router.post('/star/:id', (req, res) => {
  // CHECK MEMO ID VALIDITY
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 1
    });
  }

  // CHECK LOGIN STATUS
  if (typeof req.session.loginInfo === 'undefined') {
    return res.status(403).json({
      error: 'NOT LOGGED IN',
      code: 2
    });
  }

  // FIND MEMO
  Memo.findById(req.params.id, (err, memo) => {
    if (err) throw err;

    // MEMO DOES NOT EXIST
    if (!memo) {
      return res.status(404).json({
        error: 'NO RESOURCE',
        code: 3
      });
    }

    // GET INDEX OF USERNAME IN THE ARRAY
    let index = memo.starred.indexOf(req.session.loginInfo.username);

    // CHECK WHETHER THE USER ALREADY HAS GIVEN A STAR
    let hasStarred = index === -1 ? false : true;

    if (!hasStarred) {
      // IF IT DOES NOT EXIST
      memo.starred.push(req.session.loginInfo.username);
    } else {
      // ALREADY starred
      memo.starred.splice(index, 1);
    }

    // SAVE THE MEMO
    memo.save((err, memo) => {
      if (err) throw err;
      res.json({
        success: true,
        has_starred: !hasStarred,
        memo
      });
    });
  });
});

/*
    READ MEMO OF A USER: GET /api/memo/:username
*/
<<<<<<< HEAD
router.get('/:username', (req, res) => {
  Memo.find({ writer: req.params.username })
    .sort({ _id: -1 })
=======
router.get('/person/writer/:username', (req, res) => {
    Memo.find({writer: req.params.username})
    .sort({"_id": -1})
>>>>>>> origin/list_ui
    .limit(6)
    .exec((err, memos) => {
      if (err) throw err;
      res.json(memos);
    });
});

/*
    READ ADDITIONAL (OLD/NEW) MEMO OF A USER: GET /api/memo/:username/:listType/:id
*/
router.get('/person/writer/:username/:listType/:id', (req, res) => {
    let listType = req.params.listType;
    let id = req.params.id;

    // CHECK LIST TYPE VALIDITY
    if(listType !== 'old' && listType !== 'new') {
        return res.status(400).json({
            error: "INVALID LISTTYPE",
            code: 1
        });
    }

    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code: 2
        });
    }

    let objId = new mongoose.Types.ObjectId(req.params.id);

    if(listType === 'new') {
        // GET NEWER MEMO
        Memo.find({ writer: req.params.username, _id: { $gt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    } else {
        // GET OLDER MEMO
        Memo.find({ writer: req.params.username, _id: { $lt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    }
});

/*
    READ MEMO OF A USER: GET /api/memo/:username
*/
<<<<<<< HEAD
router.get('/rentaler/:username', (req, res) => {
  Memo.find({ borrower: req.params.username })
    .sort({ _id: -1 })
=======
router.get('/person/borrower/:username', (req, res) => {
    Memo.find({borrower: req.params.username})
    .sort({"_id": -1})
>>>>>>> origin/list_ui
    .limit(6)
    .exec((err, memos) => {
      if (err) throw err;
      res.json(memos);
    });
});

/*
    READ ADDITIONAL (OLD/NEW) MEMO OF A USER: GET /api/memo/:username/:listType/:id
*/
<<<<<<< HEAD
router.get('/id/:dataid', (req, res) => {
  Memo.find({ _id: req.params.dataid })
    .sort({ _id: -1 })
    .limit(1)
=======
router.get('/person/borrower/:username/:listType/:id', (req, res) => {
    let listType = req.params.listType;
    let id = req.params.id;

    // CHECK LIST TYPE VALIDITY
    if(listType !== 'old' && listType !== 'new') {
        return res.status(400).json({
            error: "INVALID LISTTYPE",
            code: 1
        });
    }

    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code: 2
        });
    }

    let objId = new mongoose.Types.ObjectId(req.params.id);

    if(listType === 'new') {
        // GET NEWER MEMO
        Memo.find({ borrower: req.params.username, _id: { $gt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    } else {
        // GET OLDER MEMO
        Memo.find({ borrower: req.params.username, _id: { $lt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    }
});


/*
    READ MEMO: GET /api/memo
*/
router.get('/item/category/:category', (req, res) => {
	console.log(req.params.category)
    Memo.find({category:req.params.category})
    .sort({"_id": -1})
    .limit(6)
>>>>>>> origin/list_ui
    .exec((err, memos) => {
      if (err) throw err;
      res.json(memos);
    });
});

/*
    READ ADDITIONAL (OLD/NEW) MEMO OF A USER: GET /api/memo/:username/:listType/:id
*/
<<<<<<< HEAD
router.get('/:username/:listType/:id', (req, res) => {
  let listType = req.params.listType;
  let id = req.params.id;

  // CHECK LIST TYPE VALIDITY
  if (listType !== 'old' && listType !== 'new') {
    return res.status(400).json({
      error: 'INVALID LISTTYPE',
      code: 1
    });
  }

  // CHECK MEMO ID VALIDITY
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: 'INVALID ID',
      code: 2
    });
  }

  let objId = new mongoose.Types.ObjectId(req.params.id);

  if (listType === 'new') {
    // GET NEWER MEMO
    Memo.find({ writer: req.params.username, _id: { $gt: objId } })
      .sort({ _id: -1 })
      .limit(6)
      .exec((err, memos) => {
        if (err) throw err;
        return res.json(memos);
      });
  } else {
    // GET OLDER MEMO
    Memo.find({ writer: req.params.username, _id: { $lt: objId } })
      .sort({ _id: -1 })
      .limit(6)
      .exec((err, memos) => {
        if (err) throw err;
        return res.json(memos);
      });
  }
=======
router.get('/item/category/:category/:listType/:id', (req, res) => {
    let listType = req.params.listType;
    let id = req.params.id;

    // CHECK LIST TYPE VALIDITY
    if(listType !== 'old' && listType !== 'new') {
        return res.status(400).json({
            error: "INVALID LISTTYPE",
            code: 1
        });
    }

    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code: 2
        });
    }

    let objId = new mongoose.Types.ObjectId(req.params.id);

    if(listType === 'new') {
        // GET NEWER MEMO
        Memo.find({ category: req.params.category, _id: { $gt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    } else {
        // GET OLDER MEMO
        Memo.find({ category: req.params.category, _id: { $lt: objId }})
        .sort({_id: -1})
        .limit(6)
        .exec((err, memos) => {
            if(err) throw err;
            return res.json(memos);
        });
    }
>>>>>>> origin/list_ui
});
export default router;
