import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./views/register.jsx"; 
import NewAlarm from './views/newAlarm.jsx';
import AlarmConfig from './views/alarmConfigs.jsx'
import AlarmView from './views/alarmView.jsx'
import Login from './views/login.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-alarm" element={<NewAlarm />} />
        <Route path="/alarm-config" element={<AlarmConfig />} />
        <Route path="/alarm-view" element={<AlarmView />} />
      </Routes>
  </Router>
  )
}

export default App
