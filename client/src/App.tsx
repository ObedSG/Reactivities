//Aqui se define el componente principal de la aplicación
//para que se pueda renderizar en el DOM, Sirve como punto de entrada para la aplicación React.

import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

 
  // El hook useState permite que el componente App mantenga un estado interno.
  const [activities, setActivities] = useState<Activity[]>([]);



  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(Response => setActivities(Response.data))


    return () => { }
  }, [])

  return (
    <>
      <Typography variant ='h3'>Reactivities</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            
          
            <ListItemText> {activity.title} </ListItemText>             
          </ListItem>

            
        ))}
  
    
    
      </List>
 
    </>




  )
}

export default App
