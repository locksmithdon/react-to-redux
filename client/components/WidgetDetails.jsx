import React from 'react'

export default React.createClass({
  render () {
    const widget = this.props.widget
    const hide = () => this.props.hideDetails()
    return (
      <div className="widget-details">
        <h2>Details</h2>
        <p>Name: {widget.name}</p>
        <p>Price: {widget.price}</p>
        <p>Mfg: {widget.mfg}</p>
        <p>In stock: {widget.inStock}</p>
        <a href="#" onClick={hide}>Close</a>
      </div>
    )
  }
})
