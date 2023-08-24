type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function Modal({ modalOpen, closeModal, children }: Props) {
  const turnOffModal = () => closeModal();

  return (
    <div className={` modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className='modal-box relative'>
        <label
          onClick={turnOffModal}
          className='btn btn-sm btn-circle absolute top-2 right-2'
        >
          X
        </label>
        {children}
      </div>
    </div>
  );
}
