const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_histories');

router.get('/',controller.list);
router.get('/:id',controller.index);
router.post('/',controller.create);
router.put('/',controller.replace);
router.patch('/:id',controller.update);
router.delete('/:id',controller.destroy);

module.export = router;