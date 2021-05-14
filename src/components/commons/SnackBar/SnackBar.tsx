import ReactDOM from 'react-dom';

import * as Styled from './SnackBar.styles';

const $snackBar = document.querySelector('#snack-bar');

export interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

let timer: NodeJS.Timeout;

const SnackBar = ({ message, setMessage }: Props) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    setMessage('');
  }, 3000);

  if (!$snackBar) return null;
  return ReactDOM.createPortal(<Styled.SnackBar>{message}</Styled.SnackBar>, $snackBar);
};

export default SnackBar;
