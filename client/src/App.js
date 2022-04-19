import './App.css';

function App() {
  const [movieName,setMovieName]=useState('');
  const [review,setReview]=useState('');
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label >Movie Name:</label>
        <input type="text" name='movieName' onChange={(e)=>{
          setMovieName(e.target.value)
        }}/>
        <label >Review:</label>
        <input type="text" name='review' onChange={(e)=>{
          setReview(e.target.value)
        }}/>
        <button type='submit'>Submit</button>
      </div>
      <p>{movieName}</p>
      <p>{review}</p>
    </div>
  );
}

export default App;
