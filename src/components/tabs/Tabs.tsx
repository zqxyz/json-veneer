import React, { useState } from "react";
import "./Tabs.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      tab: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
};

type Props = {
  defaultTab: string;
  children: JSX.Element[];
};

const Tabs: React.FC<Props> = ({ children, defaultTab }) => {
  if (!defaultTab) defaultTab = children[0].props.title;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [highlightActiveTab, setHighlightActiveTab] = useState(null);

  const titles = Array.from(
    children.map((child) => {
      return (
        <div
          tabIndex={-1}
          key={`tabOf${child.props.title}`}
          className={
            activeTab === child.props.title
              ? "tab-handle tab-handle-active"
              : "tab-handle tab-handle-inactive"
          }
          onClick={() => {
            setActiveTab(child.props.title);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") setActiveTab(child.props.title);
          }}
          onMouseEnter={() => {
            setHighlightActiveTab(child.props.title);
          }}
          onMouseLeave={() => {
            setHighlightActiveTab(null);
          }}
        >
          {child.props.title}
        </div>
      );
    })
  );

  const bodies = Array.from(
    children.map((child) => {
      return (
        <div
          key={`bodyOf${child.props.title}`}
          className={
            activeTab === child.props.title
              ? "tab-body tab-body-active"
              : "tab-body tab-body-inactive"
          }
          data-highlight={
            child.props.title === highlightActiveTab ? true : false
          }
        >
          {child.props.children}
        </div>
      );
    })
  );

  return (
    <>
      <div className="tabs">{titles}</div>
      <div id="tab-body-content-container">{bodies}</div>
    </>
  );
};

export default Tabs;
