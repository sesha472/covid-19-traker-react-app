import React,{useEffect,useState} from 'react';

function App() {
  const [data, setdata] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    // fetch('https://api.covid19india.org/data.json') this api is not working now 

    .then( res => res.json()
    ).then(jsondata => setdata(jsondata))
  },[])
  return (
    <div className="App">
      <h1>SESHA COVID-19 TRAKER REACT APP</h1>
      
      <table className="table table-hover" style={{width:"50%",margin:'auto'}}>
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
      <th scope="col">id</th>
    </tr>
  </thead>
  <tbody>
    {data.map(user=>{
      return(
        <tr>
        <th scope="row">{user.userId}</th>
        <td>{user.title}</td>
        <td>{(user.completed)?<p>completed</p>:<p>notcompleted</p>}</td>
        <td>{user.id}</td>
      </tr>
      )
    })}
    
  </tbody>
</table>
      
    </div>
  );
}

export default App;
