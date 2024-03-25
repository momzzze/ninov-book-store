import { Book, BookWithId } from "../types/types";

export const addBook = async (book: Book) => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        const dataOutput = await response.json();
        return dataOutput;
    } catch (error) {
        return error
    }
}

export const getBooksFromApi = async () => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/books');
        const dataOutput = await response.json();
        return dataOutput;
    } catch (error) {
        return error;
    }
}

export const deleteBook = async (id: string) => {
    try {
        const response = await fetch(`https://book-api-05ci.onrender.com/books/delete/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const editBook = async (id: string | undefined, book: BookWithId | Book) => {
    try {
        const response = await fetch(`https://book-api-05ci.onrender.com/books/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        const dataOutput = await response.json();
        return dataOutput;
    } catch (error) {
        return error;
    }
}

