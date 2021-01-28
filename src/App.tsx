import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import Welcome from './components/welcome';
import { FrequentFlyerClubService } from './service/ff-club-service';

type Inputs = {
  firstName: string,
  lastName: string,
};
const ffcService = new FrequentFlyerClubService();
function App() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [id, setId] = useState(-1)

  const onSubmit = (data: any) => {
   setId(ffcService.addToClub({ firstName: data.firstName, lastName: data.lastName }));
  };

  // console.log('FirstName= ', watch("firstName")); // watch input value by passing the name of it
  // console.log('LastName=', watch("lastName")); // watch input value by passing the name of it

  return (
      <div className={'card'}>
        <h1>Flying High Airlines</h1>
        <h2> Frequent Flyer Club</h2>
        <p className={'note'}>Enter your first and last name then click Submit to enroll in the Frequent Flyer Club!</p>
        <div className={'visual'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'field'}>
              <label id={'first-name-label'}>First Name</label>
              <input
                  type="text"
                  name="firstName"
                  defaultValue="" ref={register({ required: true })}
                  aria-labelledby={'first-name-label'}
              />
            </div>

            <div className={'field'}>
              <label id={'last-name-label'}>Last Name</label>
              <input
                  type="text"
                  name="lastName"
                  ref={register({ required: true })}
                  aria-labelledby={'last-name-label'}
              />
            </div>
            {errors.firstName && <div className={'error'}>First Name is required</div>}
            {errors.lastName && <div className={'error'}>Last Name is required</div>}

            <div className={'submitContainer'}><button type="submit">Save</button></div>
          </form>
          <Welcome id={id} service={ffcService}/>
        </div>
      </div>
);
}

export default App;
