import CreateBoardForm from "@/components/CreateBoardForm"

const CreateBoard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <picture className="absolute inset-0 -z-10">
        <img src='./kanban-2.svg' alt="background" className="w-full h-full object-cover opacity-30" />
      </picture>
      <CreateBoardForm />
    </div>
  )
}

export default CreateBoard