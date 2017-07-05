import React from "react"
import { GreenBox, Submit, Input, Form } from "./styles"

class HobbieInput extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // https://facebook.github.io/react/docs/handling-events.html
  // It binds to the input element
  // Even it is under redux, we need manage the input element's state
  // It is confined to this component.
  // However, for real life application, it's better to use a redux based form module
  handleChange = event => {
    // use camelCase not snake_case
    this.setState({ newHobbie: event.target.value })
  }
  // Read the link below to understand why we are using handlers
  // for every form components(such as input here).
  // https://facebook.github.io/react/docs/forms.html#controlled-components
  handleSubmit = event => {
    // check for empty input
    if (this.state.newHobbie) {
      // calling the action creator to pass the data through redux flow.
      this.props.actions.addHobbie(this.state.newHobbie)
    }
    event.preventDefault()
  }

  render() {
    return (
      <GreenBox>
        <Form onSubmit={this.handleSubmit}>
          <Input id="id" type="text" onChange={this.handleChange} />
          <Submit type="submit" value="Add" />
        </Form>
      </GreenBox>
    )
  }
}

export default HobbieInput
