import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Calculator from './Calculator/Calculator';
import Form from './Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App; 