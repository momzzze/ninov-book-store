//email: string, password: string
export const loginUser = async (data) => {  
    const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })    
    const dataOutput = await response.json()
    return dataOutput
}