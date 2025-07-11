import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import HelloMessage from './components/HelloMessage'
import Class from './components/Class'
import Student from './components/Student'
import Employee from './components/Employee'
let a = "rohan"

function App() {
  

  return (
    <div className='bg-blue-600 text-white'>
      <Greet />
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
      <Class  name={a} age="15"/>
      <Class  name="Ashvin" age="45"/>
      <Class  name="Virat" age="52"/>
      <Student name="Ajay"/>

      
      <Employee />
    </div>
  )
}

export default App
