import React from "react";
import "./CheckoutForm.css";
import { withRouter } from "react-router-dom";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      municipality: "",
      postcode: "",
      street: "",
      block: "",
      enterance: "",
      floor: "",
      apartment: "",
      errors: {}
    };
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      phone,
      municipality,
      postcode,
      street,
      block,
      enterance,
      floor,
      apartment,
    } = this.state;

    let errors = {};

    if(!name.length){
      errors = {...errors, name:'This field is required'}
    }
    if(!phone.length){
      errors = {...errors, phone:'This field is required'}
    }
    if(!municipality.length){
      errors = {...errors, municipality:'This field is required'}
    }
    if(!postcode.length){
      errors = {...errors, postcode:'This field is required'}
    }
    if(!street.length){
      errors = {...errors, street:'This field is required'}
    }
    if(!block.length){
      errors = {...errors, block:'This field is required'}
    }
    if(!enterance.length){
      errors = {...errors, enterance:'This field is required'}
    }
    if(!floor.length){
      errors = {...errors, floor:'This field is required'}
    }
    if(!apartment.length){
      errors = {...errors, apartment:'This field is required'}
    }

    if(Object.entries(errors).length){
      this.setState({errors})
      return;
    }
   
   this.props.history.push('/success') 

  };

  render() {
    const {
      name,
      phone,
      municipality,
      postcode,
      street,
      block,
      enterance,
      floor,
      apartment,
      errors
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="checkout">
        <form className="container">
          <div className="containers">
            <div>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                id="name"
              />
              {errors.name && (<p>{errors.name}</p>)}
            </div>
            <div>
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={phone}
                id="phone"
              />
              {errors.phone && (<p>{errors.phone}</p>)}
            </div>
            <div>
              <label htmlFor="municipality">MUNICIPALITY</label>
              <input
                type="text"
                name="municipality"
                onChange={this.handleChange}
                value={municipality}
                id="municipality"
              />
              {errors.municipality && (<p>{errors.municipality}</p>)}
            </div>
            <div>
              <label htmlFor="postcode">POSTCODE</label>
              <input
                type="text"
                name="postcode"
                onChange={this.handleChange}
                value={postcode}
                id="postcode"
              />
               {errors.postcode && (<p>{errors.postcode}</p>)}
            </div>
            <div>
              <label htmlFor="street">STREET NAME</label>
              <input
                type="text"
                name="street"
                onChange={this.handleChange}
                value={street}
                id="street"
              />
               {errors.postcode && (<p>{errors.postcode}</p>)}
            </div>
            <div>
              <label htmlFor="block">BLOCK</label>
              <input
                type="text"
                name="block"
                onChange={this.handleChange}
                value={block}
                id="block"
              />
               {errors.block && (<p>{errors.block}</p>)}
            </div>
            <div>
              <label htmlFor="enterance">ENTERANCE</label>
              <input
                type="text"
                name="enterance"
                onChange={this.handleChange}
                value={enterance}
                id="enterance"
              />
               {errors.enterance && (<p>{errors.enterance}</p>)}
            </div>
            <div>
              <label htmlFor="floor">FLOOR</label>
              <input
                type="text"
                name="floor"
                onChange={this.handleChange}
                value={floor}
                id="floor"
              />
               {errors.floor && (<p>{errors.floor}</p>)}
            </div>
            <div>
              <label htmlFor="apartment">APARTMENT</label>
              <input
                type="text"
                name="apartment"
                onChange={this.handleChange}
                value={apartment}
                id="apartment"
              />
               {errors.apartment && (<p>{errors.apartment}</p>)}
            </div>
            <button type="submit">
              <h3>Place Order</h3>
            </button>
          </div>
        </form>
      </form>
    );
  }
}

export default withRouter( CheckoutForm);
