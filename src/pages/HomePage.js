import React, { useContext, useEffect, useState } from 'react'
//import FetchInstance from '../utils/FetchInstance'
import AuthContext from '../context/AuthContext'
import useFetch from '../utils/useFetch'

const HomePage = () => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  let api = useFetch()

  useEffect(() => {
    getNotes()
  },[])


  let getNotes = async () => {
    let {response, data} = await api('api/notes/')
    if(response.status === 200){
      setNotes(data)
    }
    else{
      logoutUser()
    }
  }
  return (
    <div>
       <h2>You are logged into the homepage</h2>

       <ul>
       {notes.map(note => (
          <li key={note.id}>{note.body}</li>
        ))}
       </ul>
    </div>
  )
}

export default HomePage
