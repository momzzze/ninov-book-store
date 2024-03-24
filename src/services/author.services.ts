import {Author} from "../types/types";

export const addAuthor = async (data: Author) => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const dataOutput = await response.json();
        return dataOutput;

    } catch (error) {
        return error
    }
}