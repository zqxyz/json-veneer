import React, { useState } from 'react'
import './Tabs.css'

const Tabs = ({ children, defaultTab }) => {
  if (!defaultTab) defaultTab = children[0].props.title
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabChange = () => {
    
  }

  const titles = Array.from(children.map((child) => {
    return (
      <div
        tabIndex='0'
        key={`tabOf${child.props.title}`}
        className={(activeTab === child.props.title)
          ? 'tab-handle tab-handle-active'
          : 'tab-handle tab-handle-inactive'}
        onClick={() => { setActiveTab(child.props.title) }}
        onKeyPress={e => { if (e.key === 'Enter') setActiveTab(child.props.title) }}
      >
        {child.props.title}
      </div>
    )
  }))

  const bodies = Array.from(children.map((child) => {
    return (
      <div
        key={`bodyOf${child.props.title}`}
        className={(activeTab === child.props.title)
          ? 'tab-body tab-body-active'
          : 'tab-body tab-body-inactive'}
      >
        {child.props.children}
      </div>
    )
  }))

  return (
    <>
      <div className='tabs'>
        {titles}
      </div>
      {bodies}
    </>
  )
}

export default Tabs
