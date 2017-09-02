const listdb = require('../models/listdb');

module.exports = {
  makeBlankList(req, res, next) {
    const blankList = {
      id: null,
      list:null,
      status:null,
    };
    res.locals.list = blankList;
    next();
  },
  /*Middleware func:
  Get all the list and set them in res.locals
  @param {req} - Node's request object
  @param {res} - Node's response obj*/
index(req, res, next) {//(database logic(models), rendered JSON/template, error handler)
  listdb.findAll()
  .then((lists) => {
    res.locals.lists = lists;// passing the data to next() middleware
    next();
  })
.catch(err => next(err))
},

/*Middleware func:
*/
getOne(req, res, next) {
  listdb.findById(req.params.id)
    .then ((list) => {
      res.locals.list = list;
      next();
    })
  .catch(err => next(err));
  },

/*Middleware func:to create list*/
  create(req, res, next) {
    listdb.save(req.body)
      .then((list) => {
        res.locals.list = list;
        next();
      })
      .catch(err => next(err));
  },
  update(req, res, next) {
    console.log(req.body, 'update controller');
      listdb.update(req.body)
      .then((list) => {
        res.locals.list = list;
        next();
      })
      .catch(err => next(err));
  },
  /*Middleware function: delete*/
  destroy (req, res, next) {
    listdb.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
  showListForm: (req, res) => {
    res.json({
      message: 'I’m the HTML form for new quotes. I post to /quotes',
    });
  },

};
