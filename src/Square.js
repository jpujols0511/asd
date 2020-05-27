import * as React from 'react';

interface SquareProps {
  color: 'red' | 'black';
}
const Square: React.FunctionComponent<SquareProps> = (props) => (
  <div style={{ backgroundColor: props.color }}>{props.children}</div>
);

export default Square;
