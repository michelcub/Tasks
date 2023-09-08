
import {create} from 'zustand';



const useBoards = create((set) => {
    return{

        steps: 1,

        boards: [],
        newBoard: {
            name: '',
            description: '',
            members: []
        },
        


        setSteps: (steps)=>{
            set({steps: steps})
        },

        setBoards: async()=>{
            const response = await fetch('http://localhost:3000/boards');
            const data = await response.json();
            set({boards: data});
        },

        setNewBoard: async(newBoard)=>{
            const response = await fetch('http://localhost:3000/boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBoard)
            });
            const data = await response.json();
            set({newBoard: data});
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

        setName: (name) => {
            set((state) => ({
                newBoard:{
                    ...state.newBoard,
                    name: name,
                }
            }));
        },

        


    }
})

export default useBoards;