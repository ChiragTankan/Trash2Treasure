
import axios from 'axios'

export default function UploadForm() {
  const submit = async () => {
    await axios.post('http://localhost:5000/api/reports', {
      imageUrl: 'demo.jpg',
      location: 'Auto-detected'
    })
    alert('Report submitted')
  }

  return <button onClick={submit}>Report Garbage</button>
}
