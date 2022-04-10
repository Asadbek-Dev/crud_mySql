import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label htmlFor="">Movie:</label>
        <input type="text" name='movieName'/>
        <label htmlFor="">Review:</label>
        <input type="text" name='review'/>
        <button type='submit'>Submit</button>
      </div>
    </div>
  );
}

export default App;
