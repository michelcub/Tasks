
import useBoards from '../../Contexts/Boards';
 
 export const Page4 = () => {
    const {setNewBoard, newBoard} = useBoards()
       
        console.log(newBoard)
        
        return (
            <div className='h-full overflow-hidden'>
                <h2 className='text-2xl font-bold text-center'>Resumen</h2>
                <h3 className='text-center uppercase'>Title: {newBoard.title}</h3>
                <div className='h-6 overflow-hidden'>
                    <p className=''>{newBoard.description}</p>
                </div>
                
                <h3 className='p-2 text-center'>Miembros</h3>
                {newBoard.members.length>0?<ul className='flex flex-col w-full h-[7rem] gap-2 flex-nowrap overflow-y-auto   scrollbar-thumb-slate-800 scrollbar-thin p-1'>
                    {newBoard.members.map(member => {
                        return <li className='h-8 p-1 border-green-400 rounded-lg bg-slate-800 border-s-4 hover:bg-slate-700'>{member.name}</li>
                    })}
                </ul>:<p>No hay miembros</p>}
                <div className='flex justify-center mt-4'>
                    <button onClick={()=> setNewBoard(newBoard)} className='px-2 py-1 text-white rounded-lg bg-primary'>Crear board</button>
                </div>
            </div>
        )
 }