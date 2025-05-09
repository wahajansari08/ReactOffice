
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './assets/components/Navbar'
import Greeting from './assets/components/Greeting'
import Counter from './assets/components/Counter'
import Todo from './assets/components/Todo'
import EditTodo from './assets/components/EditTodo'
import Timer from './assets/components/Timer'
import Conditions from './assets/components/Conditions'
import Crud from './assets/components/Crud';
import DigitalClock from './assets/components/DigitalClock';
import AnalogClock from './assets/components/AnalogClock';
import ShoppingCart from './assets/components/ShoppingCart';


function App() {
  return(
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Greeting name="First"/>} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/edit-todo" element={<EditTodo />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/conditions" element={<Conditions/>} />
      <Route path="/crud" element={<Crud/>} />
      <Route path="/digital-clock" element={<DigitalClock/>} />
      <Route path="/analog-clock" element={<AnalogClock/>} />
      <Route path="/shopping-cart" element={<ShoppingCart/>} />
    </Routes>
    </BrowserRouter>
  </>

  )
}

export default App
