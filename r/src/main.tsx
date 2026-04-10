import App from './app'
import './style.css'
import { createRoot } from 'react-dom/client'


const div = document.querySelector('#root')

if (div) {
  createRoot(div).render(

    <>

      <App></App>

    </>
  )
}