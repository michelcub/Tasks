
import {create} from 'zustand';



const useBoards = create((set) => {
    return{
        error: null,
        loading: true,
        steps: 1,

        boards: [],
        newBoard: {
            title: '',
            description: '',
            members: []
        },
        
        listMembers: [],


        setSteps: (steps)=>{
            set({steps: steps})
        },

        getBoards: async()=>{
            try{
                set({loading: true});
                const response = await fetch('http://localhost:3000/api/boards',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            if(!response.ok) throw new Error('Error al obtener los tableros');
            const data = await response.json();
            console.log(data);
            set({boards: data.data});
            }catch(err){
                console.log(err);
                set({error: err});
            }finally{
                set({loading: false});
            }
        },

        setNewBoard: async (newBoard)=>{
            try{
                console.log(newBoard);
                
                await fetch(`http://localhost:3000/api/boards`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Autorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify(newBoard)
                })
                .then((response) => {
                    console.log(response);
                    return response.json()
                })
            }catch(err){
                console.log(err);
            }
            set({newBoard: {title: '', description: '', members: []}});
        },
        
        setMember: (member) => {
            set((state) => ({
                newBoard: {
                ...state.newBoard,
                members: [...state.newBoard.members, member],
                }
            }));
        },

        setDescription: (description) => {
            set((state) => ({
                newBoard:{
                    ...state.newBoard,
                description: description,
                }
            }));
        },

        setName: (title) => {
            set((state) => ({
                newBoard:{
                    ...state.newBoard,
                    title: title,
                }
            }));
        },

        findUser: async (email) => {
            try{
                set({loading: true});
                const response = await fetch(`http://localhost:3000/api/users/${email}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok) throw new Error('Error al obtener los usuarios');
            const data = await response.json();
            await set({listMembers: data.data});
            }catch(err){
                
                set({error: err});
            }finally{
                set({loading: false});
            }
        }

        


    }
})

export default useBoards;