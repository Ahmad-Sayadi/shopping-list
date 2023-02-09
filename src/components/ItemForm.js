import React from 'react'

class ItemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addItem(event,this.state.value)
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.vlaue}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}
export default ItemForm
