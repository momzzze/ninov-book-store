import { Genre } from "../types/types"

export const addGenre = async (data: Genre) => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/genres', {
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

export const getGenresFromApi = async () => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/genres');
        const dataOutput = await response.json();
        return dataOutput;
    } catch (error) {
        return error;
    }
}