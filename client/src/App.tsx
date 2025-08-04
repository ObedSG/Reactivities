//Aqui se define el componente principal de la aplicación
//para que se pueda renderizar en el DOM, Sirve como punto de entrada para la aplicación React.

import { useState, useEffect } from "react";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(()=> {
    fetch('https://localhost:5001/api/activities')
    .then(response => response.json())
    .then(data => setActivities(data))
  

    return ()=>{}
  },[])

  return (
    <div>
       <h3 className="app" style={{ color: 'blue' }}>Reactivities</h3>
       <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.title}</li>
        ))}
       </ul>
    </div>

  )
}

export default App
