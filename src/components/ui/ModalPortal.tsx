import reactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  const node = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, node);
}
