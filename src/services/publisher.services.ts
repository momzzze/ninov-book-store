import { Publisher } from "../types/types";

export const addPublisher = async (data: Publisher) => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/publishers', {
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