import { BrowserRouter } from 'react-router-dom'
import DefaultLayout from './components/layout/DefaultLayout'

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App;
