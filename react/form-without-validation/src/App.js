import './App.css';
import {useState} from 'react';

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleReset = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setGender("male");
    setSelectedChoice("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(gender);
    console.log(selectedChoice);
  }

  return (
    <div className="App">
      <h1>Form Without Validation</h1>
        <div className='formBlock'>
        <form>
          <fieldset>
            <legend>Personal Information: </legend>
            <div className='tableBlock'>
              <table>
                <tr>
                  <td><label>First Name*</label></td>
                  <td><input type='text' name='fname' id='fname' value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/></td>
                </tr>
                <tr>
                  <td><label>Last Name*</label></td>
                  <td><input type='text' name='lname' id='lname' value={lastname} onChange={(e) => {setLastname(e.target.value)}}/></td>
                </tr>
                <tr>
                  <td><label>Email*</label></td>
                  <td><input type='email' name='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/></td>
                </tr>
                <tr>
                  <td><label>Phone*</label></td>
                  <td><input type='tel' name='phone' id='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}/></td>
                </tr>
                <tr>
                  <td><label>Gender*</label></td>
                  <td><input type='radio' name='gender' value="male" checked={gender==="male"} onChange={(e) => {setGender(e.target.value)}}/>Male</td>
                  <td><input type='radio' name='gender' value="female" checked={gender==="female"} onChange={(e) => {setGender(e.target.value)}}/>Female</td>
                </tr>
                <tr>
                  <td><label>Select Your Choice*</label></td>
                  <td>
                    <select value={selectedChoice} onChange={(e) => {setSelectedChoice(e.target.value)}}>
                      <option value="" selected={selectedChoice===""}>Select Your Answer</option>
                      <optgroup label='Beginner'>
                        <option value="1">HTML</option>
                        <option value="2">CSS</option>
                        <option value="3">JavaScript</option>
                      </optgroup>
                      <optgroup label='Advanced'>
                        <option value="4">NodeJS</option>
                        <option value="5">React</option>
                        <option value="6">ExpressJS</option>
                      </optgroup>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><button type="reset" onClick={() => {handleReset()}}>Reset</button></td>
                  <td><button type='submit' onClick={(e) => {handleSubmit(e)}}>Submit</button></td>
                </tr>
              </table>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
