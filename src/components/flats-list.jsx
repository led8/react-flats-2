import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    const flats = this.props.flats
    console.log(flats)
    console.log(this.props.active.name)
    return (
      flats.map((flat, index) => <Flat name={flat.name}
                              imageUrl={flat.imageUrl}
                              price={flat.price}
                              priceCurrency={flat.priceCurrency}
                              key={flat.name}
                              selectFlat={this.props.selectFlat}
                              index={index}
                              active={flat.name === this.props.active.name}
                        />)
    )
  }
}

export default FlatList;
