import CreateBoardForm from "@/components/CreateBoardForm";
import Navbar from "@/components/Navbar";

const CreateBoard = () => {
  return (
    <section>
      <Navbar>
        <h1 className="text-2xl font-semibold">Create a New Board</h1>
      </Navbar>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="p-4 md:p-8">
          <CreateBoardForm />
        </div>
      </div>
    </section>
  );
};

export default CreateBoard;
