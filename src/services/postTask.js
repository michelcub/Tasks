const postTask = async ({task}) => {
    try{
        if(task === undefined) throw new Error('Task is required')
        if(task.title === undefined) throw new Error('Title is required')
        if(task.description === undefined) throw new Error('Description is required')
        if(task.completed === undefined) throw new Error('Status is required')

        const response = await fetch(`${process.env.API_URL/tasks}`,{
            method: 'POST',
            headers:{
                Aplication: 'application/json',
                body: JSON.stringify(task)
            }
        })
        
        const data = await response.json()
    
        return data
    }catch(error){
        console.log(error)
    }
}

export default postTask