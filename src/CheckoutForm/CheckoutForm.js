import React from "react";
import "./CheckoutForm.css";

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
      error: null
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
      error
    } = this.state;

    if (
      name ||
      phone ||
      municipality ||
      postcode ||
      street ||
      block ||  
      enterance ||
      floor ||
      apartment === ""
    ) {
      this.setState({
        error: "This field is required"
      });
    }else{
        this.setState({
            error:null
        })
        console.log(this.state);
    }
   
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
      error
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
            </div>
            <button type="submit">
              <h3>Place Order</h3>
            </button>
          </div>
        </form>
        {error ? (
            <div>
            This field is required
            </div>
        ): null}
      </form>
    );
  }
}

export default CheckoutForm;
