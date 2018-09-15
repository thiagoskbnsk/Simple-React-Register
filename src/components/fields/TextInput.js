import PropTypes from 'prop-types'
import React from 'react'

import ContainerField from '../container-field'

const getValue = value => value || ''

const TextInput = props => (
  <ContainerField label={props.label} errorMessage={props.errorMessage}>
    <input type="text" className="form-control" onChange={event => props.onChange(event.target.value)} value={getValue(props.value)} placeholder={props.placeholder} />
  </ContainerField>
)

TextInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
}

TextInput.defaultProps = {
  onChange: () => {},
  errorMessage: '',
  value: '',
}

export default TextInput
