import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Timetable from './Timetable';

function App() {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/praveenjadhav1510/6e4de92340a0b59ff7a93df55e2ddf1d/raw/0c718aa04689dfce308cc48bd790eb20fc6d8535/data.json')
    .then(response => { setSchedule(response.data); setLoading(false); })
    .catch(error => { setError(error); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className='outer'>Loading...
        <div className='inner'></div>
      </div>
    )
  }
  if (error) {
    return <div>Error loading schedule: {error.message}</div>;
  }
  return (
    <div className="App">
      {schedule && <Timetable schedule={schedule} />}
    </div>
  );
}

export default App;