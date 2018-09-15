import PropTypes from 'prop-types'
import React from 'react'

import ContainerField from '../container-field'

const getValue = value => value || ''

const PswdInput = props => (
  <ContainerField label={props.label} errorMessage={props.errorMessage}>
    <input type="password" className="form-control" onChange={event => props.onChange(event.target.value)} value={getValue(props.value)} placeholder={props.placeholder} />
    <div className="check check-password">
      <input type="checkbox" id="password" />
      <label htmlFor="password"></label>
    </div>
  </ContainerField>
)

PswdInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
}

PswdInput.defaultProps = {
  onChange: () => {},
  errorMessage: '',
  value: '',
}

export default PswdInput
