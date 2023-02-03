import React, {useState} from 'react'
import { FormCon, Input } from './form.js'
import { Flex } from '../../../Base/flex'
import { Button } from '../../../Base/button'
import { P } from '../../../Base/text.js'

const Form = () => {

  const [bio, setBio] = useState({
    email: "",
    first_name:"",
    last_name:"",
    phone_no: "",
    company: "",
    job_title: "",
    country: "",
    message: "",
    refer: ""
  })

  const data = {...bio}

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(data);
  }

  const handleClick = () => {

  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBio({...bio, [name]: value})
  }

  return (
    <div>
        <FormCon onSubmit={handleSubmit}>
          <Input pad="15px" width="95%" placeholder="Email*" type="email" value={bio.email} name="email" onChange={handleChange}/>

          <Flex bio>
            <Input pad="15px" width="90%" placeholder="First Name*" value={bio.first_name} name="first_name" onChange={handleChange}/>
            <Input pad="15px" width="90%" placeholder="Last Name*" flex value={bio.last_name} name="last_name" onChange={handleChange}/>
          </Flex>

          <Input pad="15px" width="95%" placeholder="Phone Number*" value={bio.phone_no} name="phone_no" onChange={handleChange}/>
          <Input pad="15px" width="95%" placeholder="Company*" value={bio.company} name="company" onChange={handleChange} />
          <Input pad="15px" width="95%" placeholder="Job Title*" value={bio.job_title} name="job_title" onChange={handleChange} />
          <Input pad="15px" width="95%" placeholder="Country*" value={bio.country} name="country" onChange={handleChange} />
          <Input pad="50px 15px" width="95%" placeholder="Message*" value={bio.message} name="message" onChange={handleChange} />
          <Input pad="15px" width="100%" as="select" value={bio.refer} name="refer" onChange={handleChange}>
            <option hidden>How did you hear about us?*</option>
            <option value="By_mouth">Word of Mouth</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Event">Event</option>
            <option value="Online advertising">Online advertising</option>
            <option value="Google or Bing search">Google or Bing search</option>
            <option value="Twitter">Twitter</option>
            <option value="Email">Email</option>
            <option value="Onfido customer referral">Onfido customer referral</option>
            <option value="Google play store">Google play store</option>
            <option value="Apple app store">Apple app store</option>
          </Input>

          <Flex check>
            <Input type="checkbox" style={{transform: "scale(1.5)"}}/>
            <P pad=" 20px">Yes, I would like to receive marketing communication and updates</P>
          </Flex>

          <Button>Submit</Button>
        </FormCon>
    </div>
  )
}

export default Form