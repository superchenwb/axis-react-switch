import React from 'react';
import { usePropsValue } from '../hooks/usePropsValue';
import './index.css';

export interface IAxisSwitchProps {
  checked?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  checkedColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AxisSwitch: React.FC<IAxisSwitchProps> = ({
  className,
  style,
  checked,
  onChange: _onChange,
  checkedColor,
  ...rest
}) => {
  const [value, setValue] = usePropsValue<any>({
    value: checked,
    onChange: (val: any) => {
      _onChange?.(val);
    },
  });
  return (
    <div className={className} style={style} {...rest}>
      <input
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: value ? checkedColor : undefined }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

AxisSwitch.defaultProps = {
  checkedColor: '#EF476F',
};
