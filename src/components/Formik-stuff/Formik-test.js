import React from 'react'
import {useFormik} from 'formik'
// import MultiDropDown from '../MultiDropDown';
// import AvailabilitySelector from '../AvalabilityDropdowdSelector';


const MentorSignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      helpWith: '',
      availDates: '',
      workProf: '',
    },
    onSubmit: values => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="helpWith">I'd like to Help out With: </label>
      <input 
        type="text" 
        name="helpWith"
        id='helpWith' 
        onChange={formik.handleChange}
        value={formik.values.helpWith} />
        {/* <MultiDropDown
        name='helpWith'
        id='helpWith' 
        value={formik.values.helpWith}
        onChange={formik.handleChange}
        /> */}
      
      <label htmlFor="availDates">I am Available : </label>
      <input 
        type="text" 
        name="availDates"
        id='availDates' 
        onChange={formik.handleChange}
        value={formik.values.availDates} />
        {/* <AvailabilitySelector 
          placeholder='Choose Availability'
        /> */}
      
      <label htmlFor="workProf">Linkedin Profile: </label>
      <input 
        type="text" 
        name="workProf"
        id='workProf' 
        onChange={formik.handleChange}
        value={formik.values.workProf} />

        <button type="submit">Submit</button>
      
    </form>
  )
}

export default MentorSignUpForm;