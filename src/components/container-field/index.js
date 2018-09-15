import PropTypes from 'prop-types'
import React, { Component } from 'react'

class ContainerField extends Component {
  getClassName() {
    if (this.props.errorMessage) {
      return `${this.props.className} error`
    }
    return this.props.className
  }

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return <span className="error">{this.props.errorMessage}</span>
    }
    return null
  }

  render() {
    return (
      <div className={`container-field ${this.getClassName()}`}>
        <div className="form-group">
          <label htmlFor={this.props.field_id}>{this.props.label}</label>
          {this.props.children}
        </div>
        {this.renderErrorMessage()}
      </div>
    )
  }
}

ContainerField.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  field_id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ContainerField.defaultProps = {
  className: '',
  errorMessage: '',
  field_id: '',
}

export default ContainerField
