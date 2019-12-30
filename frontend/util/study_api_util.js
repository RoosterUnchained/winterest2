export const fetchStudies = () => {
    return $.ajax({
        method: "GET",
        url: "/api/studies"
    });
};

export const fetchStudy = id => {
    return $.ajax({
        method: "GET",
        url: `/api/studies/${id}`
    });
};

export const createStudy = (study, bookId) => {
    return $.ajax({
        method: "POST",
        url: `/api/books/${bookId}/studies`,
        data: study,
        contentType: false,
        processData: false
    });
};

export const updateStudy = ({ study, bookId }) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/books/${bookId}/studies/${study.id}`,
        data: {
            study,
            bookId
        }
    });
};

export const deleteStudy = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/studies/${id}`,
    });
};