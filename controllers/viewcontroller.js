module.exports = {
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  showLists(req, res) {
    res.render('lists/list-index', {
      data: res.locals.lists,
    });
  },

  showOne(req, res) {
    res.render('lists/list-single', {
      data: res.locals.list,
    });
  },
  handleCreate(req, res) {
    res.redirect('/lists');
  },
  handleUpdate(req, res) {
    /* need ot update the body so it has an ID */
    res.redirect(`/lists/${req.params.id}`);
  },
  handleDelete(req, res) {
    res.redirect('/lists');
  },
 showAddForm(req, res) {
    res.render('lists/list-add');//=======
  },
  showEditForm(req, res) {
    // console.log(res.locals.list);
    res.render('lists/list-edit', {/////=====
      data: res.locals.list,
    });
  },
};
