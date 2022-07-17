import React from 'react'

const Editor = ({userObject}) => {
  return (
    <div>
      <textarea
        name="json-input"
        id="json-input-textarea"
        cols="70"
        rows="30"
        placeholder={`{"JSON": "Goes here"}`}
        value={JSON.stringify(userObject, null, 2)}
        /**
         *  TODO: create new handleObjectChange function
         *        create visual object editing process
         *        focused on adding new objects in a
         *        nontechnical process, specifically,
         *        cloning the keys of existing nodes
         *        with awareness of node children types
         *        vs unique children
         */ 
        spellCheck="false"
      />
    </div>
  )
}

export default Editor