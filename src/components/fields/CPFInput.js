import PropTypes from 'prop-types'
import React from 'react'

import MaskedInput from 'react-text-mask'

import ContainerField from '../container-field'

const CPFInput = props => (
  <ContainerField label={props.label} errorMessage={props.errorMessage}>
    <MaskedInput className="form-control" mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]} type="text" onChange={event => props.onChange(event.target.value)} value={props.value} placeholder={props.placeholder} />
  </ContainerField>
)

CPFInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
}

CPFInput.defaultProps = {
  onChange: () => {},
  errorMessage: '',
  value: '',
}

export default CPFInput
