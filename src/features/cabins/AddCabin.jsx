import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((prev) => !prev)}>
//         {isOpenModal ? "Hide form" : "Add new cabin"}
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((prev) => !prev)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((prev) => !prev)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }
export default AddCabin;