import Book from "../model/book.model.js";

// GET ALL BOOKS
export const getBook = async (req, res) => {
  try {

    const book = await Book.find();

    res.status(200).json(book);

  } catch (error) {

    console.log(error);

    res.status(500).json({ message: error.message });

  }
};

// GET SINGLE BOOK
export const getSingleBook = async (req, res) => {

  try {

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};