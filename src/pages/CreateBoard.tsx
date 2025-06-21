import CreateBoardForm from "@/components/CreateBoardForm";

const CreateBoard = () => {
  return (
    <section className="h-full">
      <h1 className="text-xl font-bold p-8">Create a New Board</h1>
      <div className="max-w-7xl mx-auto mt-8 px-8">
        {/* Form to create a new board */}
        
          <CreateBoardForm />
        
      </div>
    </section>
  );
};

export default CreateBoard;
