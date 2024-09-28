import { useState } from 'react'
import Form from './Components/Form'
import Parent from './Components/Parent';

function App() {

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
      setName(e.target.value)
  }
 return(
  <>
    <Parent/>
  </>
 )
}

export default App
