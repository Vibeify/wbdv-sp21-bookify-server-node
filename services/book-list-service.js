const booklistDao = require("../daos/book-list-dao")

const findAllBookLists = () =>
    booklistDao.findAllBookLists()

const findBookListsForUser = (uid) =>
    booklistDao.findBookListsForUser(uid)

const findBookListById = (blid) =>
    booklistDao.findBookListById(blid)

const createBookList = (userId, name) =>
    booklistDao.createBookList(userId, name)


module.exports = {
  findAllBookLists,
  findBookListsForUser,
  findBookListById,
  createBookList
}