import {useState} from 'react';
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from './components/Results';

export default function App() {

  const [userInput, setUserInput] = useState(
        {
            initialInvestment:10000,
            annualInvestment:1200,
            expectedReturn:6,
            duration:10
        }
    );

const inputValuesAreValid =userInput.duration > 0 && userInput.expectedReturn > 0;

 function handleChange(inputIdentifier, value) 
 {
    setUserInput((prevState) => ({
        ...prevState,
        [inputIdentifier]: +value
    }));
 }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputValuesAreValid && <p id='validation-text'>Please enter valid input values (greater than 0)</p>}
    {inputValuesAreValid && <Results userInput={userInput} />}
    </>
  )
}

