import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');

if(container){
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}
else {
  throw new Error(
    "root not found"
  )
}

