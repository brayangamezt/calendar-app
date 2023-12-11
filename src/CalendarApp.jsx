import { AppRoutes } from './routes';
import { Provider } from 'react-redux';

import { store } from './store'

export const CalendarApp = () => {
  return (
    <Provider store={store} >
      <AppRoutes/>
    </Provider>
  )
}
