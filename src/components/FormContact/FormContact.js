import React, { Component, PropTypes } from 'react'

import Header2 from '../Header2/Header2'

class FormContact extends Component {
  static propTypes = {
    formIds: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
    formUrl: PropTypes.string.isRequired,
  }

  state = {
    showThankYou: false
  }

  submitForm = (e) => {
    e.preventDefault()
    const baseUrl = this.formUrl

    const inputs = [
      this.refs['FormContact-input-name'],
      this.refs['FormContact-input-email'],
      this.refs['FormContact-input-message'],
    ]

    const buildInputStr = (ref) => `entry.${ref.id}=${ref.value}`
    const [ nameStr, emailStr, messageStr ] = inputs.map(buildInputStr)

    const requestUrl = `${baseUrl}/formResponse?${nameStr}&${emailStr}&${messageStr}&submit=Submit`
    fetch(requestUrl,
      {
        method: 'POST',
        mode: 'no-cors'
      }
    )

    const clearRef = (ref) => ref.value = null
    inputs.map(clearRef)

    this.setState({
      showThankYou: true
    })
  }

  renderThankYouMessage = () => {
    return (
      <div className="FormContact-thank-you">
        <Header2 className="FormContact-thank-you-header">
          Message Received!
        </Header2>

        <p className="FormContact-thank-you-body">
          Thanks for reaching out, we will be in touch soon.
        </p>
      </div>
    )
  }

  render () {
    const { formIds } = this.props
    return (
      <section className="FormContact-container">
        <form className="FormContact-form"
          id="form"
          action=""
          method="POST"
          target="no-target">

          <label className="FormContact-input-label">
            Name
            <input id={formIds.name}
              className="FormContact-input FormContact-input-name"
              ref="FormContact-input-name"
              name="FormContact-name"
              required
              type="text" />
          </label>

          <label className="FormContact-input-label">
            Email
            <input id={formIds.email}
              className="FormContact-input FormContact-input-email"
              ref="FormContact-input-email"
              name="FormContact-email"
              required
              type="email" />
          </label>

          <label className="FormContact-input-label">
            Message
            <textarea id={formIds.message}
              className="FormContact-input FormContact-input-message"
              ref="FormContact-input-message"
              name="FormContact-message"
              required
              type="text" />
          </label>

          <div className="FormContact-form-footer">
            {this.state.showThankYou && this.renderThankYouMessage()}

            <button className="Button FormContact-submit-btn"
              type="submit"
              onClick={this.submitForm}>
              Send Message
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default FormContact
