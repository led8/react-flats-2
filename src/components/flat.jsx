import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    this.props.selectFlat(this.props.index)
  }

  render(){
    return(
      <div className={`card${this.props.active ? ' active' : ''}`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imageUrl}')`}}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
