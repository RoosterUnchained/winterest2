export const fetchBookStudies = () => {
    return $.ajax({
        method: "GET",
        url: "/api/book_studies"
    });
};

export const fetchBookStudy = id => {
    return $.ajax({
        method: "GET",
        url: `/api/book_studies/${id}`
    });
};

export const createBookStudy = (book_study) => {
    return $.ajax({
        method: "POST",
        url: "/api/book_studies",
        data: { book_study }
    });
};

export const updateBookStudy = book_study => {
    return $.ajax({
        method: "PATCH",
        url: `/api/book_studies/${book_study.id}`,
        data: { book_study }
    });
};

export const deleteBookStudy = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/book_studies/${book_study.id}`,
    });
};