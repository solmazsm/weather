import React from 'react';
import 'tachyons';

class Information extends React.Component {
 
state = {
	loading: true,
};
continue = e =>{
	e.preventDefault();
	this.props.nextStep();}

back = e =>{
	e.preventDefault();
	this.props.prevStep();
}
render() {
return (
	<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 bg-light-gray">
	<form   className="pa4 black-80">
	  <div className="measure">
	    <label  className="f20 b db mb2 tl">Hello {this.props.values.fname} </label>
	     <label  className="f15 db mb2 tl normal">Weather </label>
	 	   <div>
		   <p>Temp:{this.props.values.Temp}</p>
		   <p>City:{this.props.values.City}</p>
	   	   <p>Description:{this.props.values.Description}</p>
	      </div>
	   <br /><br /><br />
	    <label  className="f15 db mb2 tl">You are in: </label>
	  	  <label  className="f20 b db mb2 tl">Zip Code: {this.props.values.zipcode}</label>
	  </div>
	  <div className="tc mt3">
      <button onClick={this.back} className="white  pv3 ph4 bg-blue hover-bg-mid-red bn br2 hover-shadow-inner pointer">
        Back
      </button>
    </div>
	</form>
</article>
 
);
}
}
export default Information;