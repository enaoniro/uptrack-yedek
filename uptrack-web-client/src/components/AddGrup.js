import React, { useContext, useEffect, useState } from "react";
import { GrupContext } from "../contexts/GrupContext.js";

const AddGrup = ({ canton }) => {
  const [grup, setGrup] = useState({});
  // const [grupList, setGrupList] = useState([]);

  const {
    addGrup,
    getGrupList,
    updateGrup,
    isOpen,
    setIsOpen,
    setGrupList,
  } = useContext(GrupContext);

  const id = canton.id;

  useEffect(() => {
    getGrupList();
  }, []);

  const handleChange = (e) => {
    setGrup({ ...grup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrupList = addGrup(grup, id);
    // setGrupList(currentArray => {
    //   return [...currentArray, grup]});
    setGrupList(newGrupList);
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    // <div className="modal-dialog">
    //   <div className="modal-content">
    //     <div className="modal-header">
    <>
      <div>
        <h5 className="modal-title" id="exampleModalLabel">
          Add Grup
        </h5>
        {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> */}
      </div>
      <div className="modal-body">
        <form className="mb-4" onSubmit={handleSubmit}>
          <div>
            <h6 color="blue">grup bilgilerini giriniz</h6>
            <input
              type="text"
              className="form-control bg-info"
              placeholder="grup adi"
              name="name"
              value={grup?.name || ""}
              onChange={handleChange}
            />

            {/* <input
                type="text"
                className="form-control bg-info"
                placeholder="name"
                name="name"
                value={grup?.name || ""}
                onChange={handleChange}
              /> */}

            <input
              type="text"
              className="form-control bg-info"
              placeholder="leader"
              name="leader"
              value={grup?.leader || ""}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-1"
              // data-bs-dismiss="modal"
            >
              save
            </button>
            {/* <button
                type="button"
                className="btn btn-danger mt-1"
                // onClick={hideForm}
                // data-bs-dismiss="modal"
              >
                close
              </button> */}
          </div>
        </form>
      </div>
    </>
    //   </div>
    // </div>
  );
};

// return (
//   <div className='modal-dialog'>
//     <div className='modal-content'>
//       <div className ='modal-header'>
//         <h5 className ='modal-title' id='exampleModalLabel'>
//           Add Grup
//         </h5>
//         <button
//           type='button'
//           className ='btn-close'
//           data-bs-dismiss='modal'
//           aria-label='Close'
//         ></button>
//       </div>
//       <div className ='modal-body'>
//         <form className='mb-4' onSubmit={handleSubmit}>
//           <div>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Grup Name'
//               name='name'
//               value={grup.name}
//               onChange={handleOnChange}
//             />
//           </div>

//           <button
//             type='button'
//             className ='btn btn-secondary'
//             data-bs-dismiss='modal'
//           >
//             Close
//           </button>
//           <button
//             type='submit'
//             className ='btn btn-primary'
//             data-bs-dismiss='modal'
//           >
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
// };

export default AddGrup;
