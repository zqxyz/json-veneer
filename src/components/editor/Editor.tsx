import React from 'react'
import './Editor.css'

type Props = {
  userObject: { [name: string]: any },
  setUserObject: React.Dispatch<React.SetStateAction<object>>,
  setJsonInput: React.Dispatch<React.SetStateAction<string>>
}

/**
 * TODO:
 *    - All key/value pairs need to be a component
 *      - click on key to edit key, click away => cancels edit
 *          implication: one editable at a time
 *          - cancel button/esc reverts to a stored value, click away
 *            or enter button saves
 *    - All objects needs to be a component that contains
 *        sets of keyvalue components
 *    - boolean is a radio button pair: true/false (stylized as buttons)
 *    - number field rejects alpha chars [D/'.'] only
 *    - objects can be hovered or clicked for preview
 *        - can be duplicated (wholly or by keys only)
 *        - can be expanded in current view or moved into own view
 * 
 *   MAYBE:
 *      - add node to top level object something like "jsonVeneerValidatorRules"
 *      - stores validation rules for json structure:
 *        {
 *          "jsonVeneerValidatorRules": {
 *            "name": {
 *              "type": ["string"],
 *              "required": true,
 *              "children": null
 *            }
 *            "type": [
 *              "enum": [
 *                "CUSTOMER",
 *                "EMPLOYEE"
 *              ],
 *            ]
 *            "required": true,
 *            "children": null
 *          }
 *        }
 */ 

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