import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import HelloMessage from './components/HelloMessage'
import Class from './components/Class'
import Student from './components/Student'
import Employee from './components/Employee'
import Customer from './components/Customer'
import Click from './components/Click'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  

  return (
    <div>
      {/* <Greet />
      <Welcome />
      <Hello />
      <HelloMessage name="Rohan" age="15">
        <p>children component 1</p>
      </HelloMessage>
      <HelloMessage name="Vimal" age="7">
        <p>children component 2</p>
      </HelloMessage>
      <HelloMessage name="Sonu" age="12">
        <p>children component 3</p>
      </HelloMessage>
      <Class  name="Ashvin" age="45"/>
      <Class  name="Virat" age="52"/>
      <Student name="Ajay"/>
      <Employee name="Virat"/> */}
      {/* <Customer name="Ravi" age="25"/> */}

        {/* <Click name='Ajay'/> */}
        {/* <EventBind/> */}
        <ParentComponent />



      
    </div>
  )
}

export default App
