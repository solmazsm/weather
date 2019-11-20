import React from 'react';
import FormN from './FormN';
import Information from './Information';

export class Form extends React.Component {

	state = {
		Temp:undefined,
		City:undefined,
		Description:undefined,
		fname: undefined,
		lname: undefined,
		zipcode: undefined
	}
getWeather = async (form_value) => {
 
  	const zipcode= form_value.zipcode;
 	const key = 'e1005b118153e1575a50e02cdd3c2d85';
 	const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${key}`;
 	//console.log(url);
   	const api = await fetch(url);
  	const data = await api.json();
 	//console.log(data.weather);
  	if (zipcode){
  	
  	this.setState({Temp: data.main.temp,
  		City: data.name,
  		Description: data.weather[0].description,
  		fname: form_value.fname,
  		lname: form_value.lname,
  		zipcode: form_value.zipcode
  	});
  } else {
this.setState({Temp: undefined,
  		City: undefined,
  		Description: undefined,
  		fname: undefined,
  		lname: undefined,
  		zipcode: undefined
  	});
  }
  }

	state = {
		step: 1,
		fname:'',
		lname:'',
		zipcode:''
	}

prevStep = () => {
  const {step } = this.state;
  this.setState({
    step: step - 1
  });
}
  nextStep = (form_value) => {
  this.getWeather(form_value);
  const {step } = this.state;
  this.setState({
    step: step + 1
  });
}
handleChange = input => e => {
	this.setState({[input]: e.target.value});
}
	render() {
			//console.log(this.state);
		const {step} = this.state;
		const {fname, lname, zipcode} = this.state;
		const values = {fname, lname, zipcode}

		switch(step){
			case 1:
				return (
					<FormN
					nextStep={this.nextStep}
					handleChange={this.handleChange}
					values={values}
					getWeather={this.getWeather}
					/>)
			 case 2: 
				 return (
					<Information
					//getWeather={this.getWeather}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					//handleChange={this.handleChange}
					//form={values}
					values={this.state}

					/>)
			 default: 
			
		}
	}
}
export default Form;