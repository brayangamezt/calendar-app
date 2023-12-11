import { useUiStore, useCalendarStore } from "../../hooks"
import { addHours } from 'date-fns';

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickModal = () =>{
        setActiveEvent({
            title: '', 
            notes:'',
            start:new Date(),
            end: addHours( new Date(), 2 ),
            bgColor:'#fafafa',
            user:{
              _id:'123',
              name:'brayan g'
            }
        })
        openDateModal();
    }

  return (
    <button className="btn btn-primary fab"  onClick={handleClickModal}>
        <i className="fas fa-plus" ></i>
    </button>
  )
}
