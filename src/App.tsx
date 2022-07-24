import './App.css'
import React from 'react'
import JsonInput from './components/jsonInput/JsonInput'
import Tabs from './components/tabs/Tabs'
import Editor from './components/editor/Editor'

const App: React.FC = () => {
  const [jsonInput, setJsonInput] = React.useState('')
  const [userObject, setUserObject] = React.useState({ "json": "empty" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.value
    setJsonInput(newState)
    setUserObject(discardedPrevState => {
      if (newState === '') return { "json": "empty" }
      try {
        return JSON.parse(newState)
      } catch (error) {
        return { "json": "invalid" }
      }
    })
  }

  // TESTING ONLY
  React.useEffect(() => {
    console.log(JSON.stringify(userObject, null, 2))
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
            setUserObject={setUserObject}
            setJsonInput={setJsonInput}
          />
        </tab>
      </Tabs>
    </>
  );
}

export default App;
