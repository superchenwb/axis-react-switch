import React from 'react';
import './index.css';

export interface ISwitchProps {
  checked?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  checkedColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch: React.FC<ISwitchProps> = ({
  className,
  style,
  checked,
  onChange,
  checkedColor,
  ...rest
}) => {
  return (
    <div className={className} style={style} {...rest}>
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
    </div>
  );
};

Switch.defaultProps = {
  checkedColor: '#EF476F',
};
