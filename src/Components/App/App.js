import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES } from '../../apiCalls';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES);

  console.log(data)
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
