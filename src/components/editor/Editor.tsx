import React from 'react'
import './Editor.css'

type Props = {
  userObject: { [name: string]: any },
  setUserObject: React.Dispatch<React.SetStateAction<object>>,
  setJsonInput: React.Dispatch<React.SetStateAction<string>>
  
}

const Editor: React.FC<Props> = ({ userObject, setUserObject, setJsonInput }) => {

  const onEdit = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUserObject(prevState => ({
      ...prevState,
      [key]: e.target.value
    }));
  }

  React.useEffect(() => {
    setJsonInput(JSON.stringify(userObject, null, 2))
  }, [userObject])

  let object = [];

  const fieldTest =
    Array.from(Object.keys(userObject)
    .filter(key => { return (typeof userObject[key] === "string")})
    .map(key => {
      return (
        <div>
          <label
            htmlFor={`${key}-${userObject.key}`}
          >
            {key}:
          </label>
          <input
            id={`${key}-${userObject.key}`}
            type="text"
            value={userObject[key]}
            onChange={(e) => onEdit(e, key)}
            key={`${key}-${userObject.key}-key`}
          />
        </div>
      )
    }));

    const fieldTest2 =
    Array.from(Object.keys(userObject)
    .filter(key => { return (typeof userObject[key] === "object")})
    .map(key => {
      return (
        <div>
          <a
            href="#"
            key={`${key}-${userObject.key}-key`}
          >
            {key}
          </a>
        </div>
      )
    }));

  return (
    <div id="json-visual-editor">
      <div>
        {/* {JSON.stringify(userObject, null, 2)} */}
        {fieldTest}
        {fieldTest2}
      </div>
    </div>
  )
}

export default Editor