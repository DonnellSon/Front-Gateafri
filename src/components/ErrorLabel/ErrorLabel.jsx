import React from 'react'

const ErrorLabel = ({ error = null }) => {
  return error &&
    <div className="errorLabel">
      <span>{error}</span>
    </div>
}

export default ErrorLabel
