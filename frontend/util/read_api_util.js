export const createRead = read => {
    return $.ajax({
        method: "POST",
        url: "/api/reads",
        data: { read }
    });
};

export const deleteRead = read => {

    return $.ajax({
        method: "DELETE",
        url: `/api/reads/${read.id}`,
        data: { read }
    });
};


export const fetchReads = () => {
    return $.ajax({
        method: "GET",
        url: `/api/reads`,
    });
};