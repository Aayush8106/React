import "./App.css"

function User({name,age,role,status}){
  return(
        <li>
              <h3>{name}</h3> — <p>Age:{age}</p> — <p>Role:{role}</p> — <p>Status:{status}</p>   
        </li>
  );
}

const App = () => {
  return (
    <div>

      <ul>
        <User name={"Aayush"} age={20} role={"React Learner"} status={"Learning"}/>
        <User name={"Rahul"} age={22} role={"Designer"} status={"Available"}/>
        <User name={"Priyanshu"} age={24} role={"Developer"} status={"Busy"}/>
      </ul>
      
    </div>
  )
}

export default App;
