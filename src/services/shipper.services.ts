import { Shipper } from "../types/types";

export const addShipper = async (data: Shipper) => {
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/shippers', {
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