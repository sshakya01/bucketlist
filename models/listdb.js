const pgp = require ('pg-promise')();
const dbConfig= require ('../db/config');

//making pgp and db connection
const db= pgp(dbConfig);

module.exports= {
  /* @func findAll
     @desc- search through all lists
     @returns {Promise}*/
    findAll(){
    return db.many(`
      SELECT *
      FROM lists
      `);
  },
  /* @func findById
     @param id -of list
     @desc- search one item in the lists
     @returns {Promise}*/
    findById(id){
      return db.one(`
        SELECT *
        FROM lists
        WHERE id = $1
        `,id);
    },
  /* @func show
     @param list
     @des- posts new data in lists
     @returns- all lists*/
     show(data){
      return db.one(`
        INSERT INTO lists
        (list, status)
        VALUES
        ($/list/, $/status/)
        `,data);
     },


}
