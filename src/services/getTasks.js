const getTasks = async () => {
    try{
        const response = await fetch(`${process.env.API_URL}/tasks`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
} 

export default getTasks