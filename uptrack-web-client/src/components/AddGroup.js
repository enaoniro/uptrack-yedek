import React, { useContext, useEffect, useState } from "react";
import { GroupContext } from "../contexts/GroupContext.js";

const AddGroup = ({canton}) => {
  const [group, setGroup] = useState({});
  // const [groupList, setGroupList] = useState([]);

  const { addGroup, getGroupList, updateGroup, isOpen, setIsOpen, setGroupList } = useContext(
    GroupContext
  );

  const id = canton.id;

  useEffect(() => {
    getGroupList();
  }, []);

  const handleChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroupList = addGroup(group, id);
    // setGroupList(currentArray => {
    //   return [...currentArray, group]});
    setGroupList(newGroupList);
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
            Add Group
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
              <h6 color="blue">group bilgilerini giriniz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="grup adi"
                name="name"
                value={group?.name || ""}
                onChange={handleChange}
              />

              {/* <input
                type="text"
                className="form-control bg-info"
                placeholder="name"
                name="name"
                value={group?.name || ""}
                onChange={handleChange}
              /> */}

              <input
                type="text"
                className="form-control bg-info"
                placeholder="leader"
                name="leader"
                value={group?.leader || ""}
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
//           Add Group
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
//               placeholder='Group Name'
//               name='name'
//               value={group.name}
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

export default AddGroup;
