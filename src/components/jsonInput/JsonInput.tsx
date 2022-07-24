import React from 'react'
import './JsonInput.css'

type Props = {
  jsonInput: string,
  handleInputChange: React.ChangeEventHandler
}

const JsonInput: React.FC<Props> = ({ jsonInput, handleInputChange }) => {

  return (
    <div id="json-input-container">
      <p>
        JSON will automatically update when changes
        are made in the editor. There is no need to
        search for a "save" or "convert" button.
      </p>
      <textarea
        name="json-input"
        id="json-input-textarea"
        cols={70}
        rows={30}
        placeholder={`{"JSON": "Goes here"}`}
        value={jsonInput}
        onChange={(e) => handleInputChange(e)}
        spellCheck="false"
      />
    </div>
  )
}

export default JsonInput
