import { dateFnsLocalizer } from 'react-big-calendar'; //DatFnsLocalizer es para colocar el idioma que necesitemos

// Todo lo siguiente viene importado de datefns que debe ser instalado
import { format, parse, startOfWeek, getDay } from 'date-fns';

import esES from 'date-fns/locale/es';


const locales = {
  'es': esES,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})