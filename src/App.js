import './App.css'
import React from 'react'
import JsonInput from './components/jsonInput/JsonInput'
import Tabs from './components/tabs/Tabs'
import Editor from './components/editor/Editor'

function App() {
  const [jsonInput, setJsonInput] = React.useState('')
  const [userObject, setUserObject] = React.useState({ "json": "empty" })

  const handleInputChange = (e) => {
    const newState = e.target.value
    setJsonInput(newState)
    setUserObject(discardedPrevState => {
      if (newState === '') return { "json": "empty" }
      try {
        return JSON.parse(newState, null, 2)
      } catch (error) {
        return { "json": "invalid" }
      }
    })
  }

  // TESTING ONLY
  React.useEffect(() => {
    console.log(JSON.stringify(userObject))
  }, [userObject])

  return (
    <>
      <Tabs defaultTab={'JSON'}>
        <tab title="JSON">
          <JsonInput
            jsonInput={jsonInput}
            handleInputChange={handleInputChange}
          />
        </tab>
        <tab title="Editor">
          <Editor
            userObject={userObject}
          />
        </tab>
      </Tabs>
    </>
  );
}

export default App;
