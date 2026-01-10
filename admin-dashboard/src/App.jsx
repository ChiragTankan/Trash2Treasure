
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports')
      .then(res => setReports(res.data))
  }, [])

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {reports.map(r => <p key={r._id}>{r.location} - {r.status}</p>)}
    </div>
  )
}
