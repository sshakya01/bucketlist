const listdb = require('../models/listdb');

module.exports = {
  /*Middleware func:
  Get all the list and set them in res.locals
  @param {req} - Node's request object
  @param {res} - Node's response obj*/
//database logic(models), rendered JSON/template, error handler)
index(req, res, next) {
  listdb.findAll()
  .then((lists) => {
    res.locals.lists = lists;// passing the data to next() middleware
    // res.json({
    //   lists
    // })
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

/*Middleware func:
??????????*/
create(req, res, next) {
    listdb.save({
      list: req.body.list,
      status: req.body.status})
      .then((quote) => {
        res.locals.quote = quote;
        next();
      })
      .catch(err => next(err));
  }

