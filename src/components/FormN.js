import React  from 'react';
import 'tachyons';

export class FormN extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {step :1, fname: '', lname: '', zipcode: ''};
    this.handleChange = this.handleChange.bind(this);
   
  }
continue = (e) => {
	e.preventDefault();
	this.props.nextStep(this.state);}

handleChange(event)  {
	const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });}

	render(){
		const {values} = this.props;
		return(
<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 bg-light-gray">
    <form   className="pa4 black-80">
      <div className="measure">
        <label  className="f20 b db mb2 tl">Please Fill the Form </label>
        <label  className="f15 db mb2 tl normal">First Name </label>
        <input name="fname"   className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
        	onChange={this.handleChange} defaultValue={values.fname} />
        <label  className="f15 db mb2 tl">Last Name </label>
        <input name="lname"   className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"  
        	onChange={this.handleChange} defaultValue={values.lname}/>
         <label  className="f15 db db mb2 tl">Zip Code </label>
         <input name="zipcode"  className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" 
         	onChange={this.handleChange} defaultValue={values.zipcode}/>
        </div>
      <div className="tc mt3">
      <button onClick={this.continue}   className="white  pv3 ph4 bg-blue hover-bg-mid-red bn br2 hover-shadow-inner pointer">
        Continue
      </button>
    </div>
   
    </form>
  </article>
			)
	}
}

export default FormN;