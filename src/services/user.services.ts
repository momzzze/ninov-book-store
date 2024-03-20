//email: string, password: string
export const loginUser = async (data) => {  
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })    
    const dataOutput = await response.json()
    return dataOutput
    } catch (error) {
        return error
    }
}

export const registerUser = async (data) => {    
    try {
        const response = await fetch('https://book-api-05ci.onrender.com/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })    
    const dataOutput = await response.json()
    return dataOutput
    } catch (error) {
        return error
    }
}