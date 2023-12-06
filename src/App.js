import './App.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';

function App() {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <div className="App">
      <Calendar value={date1} onChange={(e) => setDate1(e.value)} showIcon/>
      <Calendar value={date2} onChange={(e) => setDate2(e.value)} showIcon/>
    </div>
  );
}

export default App;
