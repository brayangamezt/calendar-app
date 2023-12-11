import { useSelector, useDispatch } from 'react-redux';
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch()

  //Selecciono los valores iniciales
  const {events, activeEvent} = useSelector( state => state.calendar );

  const setActiveEvent = ( calendarEvent ) =>{
    console.log('Este es el evento dentro del hook del set active event', calendarEvent)
    dispatch( onSetActiveEvent( calendarEvent ) )
  };

  const startSavingEvent = async(calendarEvent) =>{
    //Llegar al backend

    //Todo bien
    if(calendarEvent._id){
      //Estoy actualizando
      dispatch( onUpdateEvent( {...calendarEvent} ) );

    }else{
      //Creando
      dispatch( onAddNewEvent( { _id: new Date().getTime(), ...calendarEvent} ) );
    }
  }

  const startDeletingEvent = ()=>{
    dispatch( onDeleteEvent() );
  }

  return {
    //Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
