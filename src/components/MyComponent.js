import React from "react";
import Modal from "react-modal";
import "./animation.css";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

//www.npmjs.com/package/react-
//https://www.tailwindtoolbox.com/components/modal
const App = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "blue";
  }

  function closeModal(e) {
    e.preventDefault();

    setIsOpen(false);
  }

  return (
    <div style={{ padding: "10px" }}>
      <button
        onClick={openModal}
        class="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
      >
        Open Modal
      </button>
      <Modal
        closeTimeoutMS={250}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center transition-all duration-500 ease-in-out"
        className="modal-content bg-orange-100 absolute rounded w-11/12 md:max-w-md shadow-lg z-50 overflow-y-hidden px-6 py-4 bg-orange-200"
      >
        {/* Content */}
        <form>
          {/* Content__Title */}
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Simple Modal!</p>
            <button
              class="modal-close cursor-pointer z-50"
              onClick={closeModal}
            >
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </div>

          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

          {/* Content__Body */}
          <p>Modal content can go here</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>

          {/* Content__Footer  */}
          <div class="flex justify-end pt-2">
            <button
              onClick={closeModal}
              class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Action
            </button>
            <button
              onClick={closeModal}
              class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
