import {useState, useContext} from "react";
import FormInput from "./form-input.component";
import Axios from "axios";

const defaultFormField = {
	name: "",
	age: "",
	contact: "",
	username: "",
	password: "",
	balance: 0,
}

export default function RegisterForm() {
	const [formField, setFormField] = useState(defaultFormField);
	const {name, age, contact, username, password, balance} = formField;

	const handleChange = (event) => {
		const {name, value} = event.target;
		setFormField({
			...formField, [name]: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			Axios.post(
			'http://localhost:3001/create', 
			{...formField})
			.then((res) => console.log(res.data));
		} catch (error) {
			console.log(error);
		}
		setFormField(defaultFormField);
		alert("Registration successfull");
	}

	return (
    <form className="form-container" onSubmit={handleSubmit}>
      <FormInput name="name" type="text" value={name} onChange= {handleChange}/>
      <FormInput name="age" type="number" value={age} onChange= {handleChange}/>
      <FormInput name="contact" type="tel" value={contact} onChange= {handleChange}/>
      <FormInput name="username" type="text" value={username} onChange= {handleChange}/>
      <FormInput name="password" type="password" value={password} onChange= {handleChange}/>
      <FormInput name="balance" type="number" value={balance} onChange= {handleChange}/>
      <FormInput type="submit" value="submit"/>
    </form>
	)
}