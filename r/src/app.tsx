import { useState } from "react"
import axios from 'axios'
const urll = import.meta.env.VITE_API_URL || "/api/gettext";

export default function App() {
  const [response, setresponse] = useState('')
  const sendReq = async () => {
    try {
      const response = await axios.get(urll)
      const data = response.data
      console.log(data)
      setresponse(data)
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div className={`bg-red-400 min-h-screen`}>

      <button onClick={() => { sendReq() }}>Click to send a request to backend</button>
      <p>{response}</p>





    </div>
  )
}