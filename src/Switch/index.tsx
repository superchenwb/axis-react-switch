import React from 'react';
import './index.css';

export interface ISwitchProps {
  checked?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  checkedColor?: string;
}

export const Switch: React.FC<ISwitchProps> = ({ checked, onChange, checkedColor }) => {
  return (
    <>
      <input
        checked={checked}
        onChange={onChange}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: checked ? checkedColor : undefined }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

Switch.defaultProps = {
  checkedColor: '#EF476F',
};
