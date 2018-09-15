import PropTypes from 'prop-types'
import React from 'react'

import MaskedInput from 'react-text-mask'

import ContainerField from '../container-field'

const DateInput = props => (
  <ContainerField label={props.label} errorMessage={props.errorMessage}>
    <MaskedInput className="form-control" mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} type="text" onChange={event => props.onChange(event.target.value)} value={props.value} placeholder={props.placeholder} />
  </ContainerField>
)

DateInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
}

DateInput.defaultProps = {
  onChange: () => {},
  errorMessage: '',
  value: '',
}

export default DateInput
