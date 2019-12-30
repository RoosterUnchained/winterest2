export const fetchBooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/books'
  });
};

export const fetchBook = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${id}`
  });
};

export const createBook = book => {
  return $.ajax({
    method: 'POST',
    url: '/api/books',
    data: { book }
  });
};


export const updateBook = book => {
    return $.ajax({
        method: "PATCH",
        url: `/api/books/${book.id}`,
        data: { book }
    });
};

export const deleteBook = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/books/${id}`,
    });
};