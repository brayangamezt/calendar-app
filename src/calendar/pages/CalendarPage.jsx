import { useState } from 'react';

import { Calendar} from 'react-big-calendar'; //DatFnsLocalizer es para colocar el idioma que necesitemos
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Todo lo siguiente viene importado de datefns que debe ser instalado
import { addHours  } from 'date-fns';

//Importando localizer que trae la configuracion de mi calendario
import { localizer, getMessagesEs } from '../../helpers';

//Components
import { NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { useUiStore, useCalendarStore } from '../../hooks';

const myEventsList = []

export const CalendarPage = () => {
  //Va a buscar el local storage y si no se tiene nada es decir valor vacio, este regresara week
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } =useCalendarStore();

  const eventStyleGetter = ( event, start, end, isSelected ) =>{
    const style ={
      backgroundColor:'#347CF7',
      borderRadius:'0px',
      opacity:0.8,
      color: 'white'
    }
    return {
      style
    }
  }

  const onDoubleClick = (event) =>{
    // console.log({doubleClick:event})
    openDateModal();
  }

  const onSelect = (event) =>{
    setActiveEvent( event );
  }

  const onViewChange = (event) =>{
    localStorage.setItem('lastView', event);
    setLastView(event);
  }

  return (
    <>
      <NavBar/>

      {/*El componente calendar trae por defecto varios eventos a utilizar*/}
      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{ event:CalendarEvent}}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      {/* El modal que se abre en caso de que sea necesario */}
      <CalendarModal/>

      <FabAddNew/>

      <FabDelete/>

    </>
  )
}
