import './App.css';
import { useForm } from 'react-hook-form';


function App() {
  const { register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  function onSubmiting(data) {
    console.log('form is submitted', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmiting)}>

      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName" {...register('first name')} />
      </div>

      <br />

      <div>
        <label htmlFor="middleName">Middle Name: </label>
        <input type="text" name="middleName" id="middleName" {...register('middle name')} />
      </div>

      <br />

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName" {...register('last name')} />
      </div>

      <input type="submit" value="submit" />

    </form>
  )
}

export default App