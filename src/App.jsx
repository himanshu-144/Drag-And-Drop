
import './App.css'
import DragAndDrop from './components/drag-and-drop'
import { initialData } from './data'

function App() {

  return (
    <div className='App'>
      <h2>Drag-And-Drop</h2>
      <DragAndDrop initialData={initialData} />
    </div>
  )
}

export default App
