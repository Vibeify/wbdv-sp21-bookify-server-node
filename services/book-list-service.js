const booklistDao = require("../daos/book-list-dao")

const findAllBookLists = () =>
    booklistDao.findAllBookLists()

const findBookListsForUser = (uid) =>
    booklistDao.findBookListsForUser(uid)

const findBookListById = (blid) =>
    booklistDao.findBookListById(blid)

const createBookList = (userId, name) =>
    booklistDao.createBookList(userId, name)

const deleteBookList = (blid) =>
    booklistDao.deleteBookList(blid)

const updateBookList = (blid, name) =>
    booklistDao.updateBookList(blid, name)


module.exports = {
  findAllBookLists,
  findBookListsForUser,
  findBookListById,
  createBookList,
  deleteBookList,
  updateBookList
}