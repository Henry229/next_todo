type Props = {
  modalOpen: boolean;
  turnOffModal: () => void;
  children: React.ReactNode;
};

export default function Modal({ modalOpen, turnOffModal, children }: Props) {
  const turnOffModal = () => {
    turnOffModal(modalOpen);
  };

  return (
    <div className={` modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className='modal-box relative'></div>
      <label onClick={turnOffModal}></label>
    </div>
  );
}
