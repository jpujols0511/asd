import * as React from 'react';
import withLogging from './withLogging';

interface PieceProps {
  color: 'red' | 'black';
}

const Piece = (props: PieceProps) => <h1>La maldita paranoia</h1>;

interface StackProps {
  size: number;
  pieceProps: PieceProps;
}

const Stack = ({ size, pieceProps }: StackProps) => (
  <React.Fragment>
    <h1>Clock</h1>
    {new Array(size).map((_, index) => (
      <Piece key={index.toString()} {...pieceProps} />
    ))}
  </React.Fragment>
);

const Pawn = (props: PieceProps) => <Stack size={1} pieceProps={props} />;

const King = (props: PieceProps) => <Stack size={2} pieceProps={props} />;

const EnhancedPawn = withLogging(Pawn);
const EnhancedKing = withLogging(King);

export const Usage = () => (
  <>
    <EnhancedPawn color='red' mountedLogMessage='Pawn mounted Joan es el final' />
    <EnhancedKing color='black' mountedLogMessage='King mounted' />
  </>
);
