import Navbar from './navbar';
import Pub3 from './pub3'
import Pub2 from './pub2'
import Blogs from './blogs'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="underNav">
        <Pub3 />
        <Blogs />
        <Pub2 />
      </div>
    </div>
  );
}

export default App;
