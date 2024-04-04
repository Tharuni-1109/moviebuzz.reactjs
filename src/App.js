import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';
import Likes from './Components/Likes';
import ListRender from './Components/ListRender';
import ObjectRender from './Components/ObjectRender';

function App() {
  return (
    <div className="App">
      <Movies heroName ="prabhas" villanName="prakshraj"></Movies>
      <p>Likes:100k</p>
      <Movies heroName ="vaishnav tej" villanName="vijaysethupathi"></Movies>
      <Movies heroName ="ramcharan" villanName="siddarth"></Movies>
      <Likes/>
      <ListRender/>
      <ObjectRender/>
    </div>


  );
}

export default App;
