const Navbar: React.FC = () => {
  return (
    <header className="h-20 bg-zinc-100 shadow">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <a href="https://victorwcv.github.io/taskito/" className="flex items-center gap-2 sm:invisible">
          <h1 className="text-2xl font-bold">Taskito -  <span className="text-accent-500">Kanban Board</span></h1>
        </a> 

        <nav className="block">
          <ul className="flex md:gap-12 gap-8 font font-semibold">
            {/* <li className="hover:text-primary">
              <a href="https://victorwcv.github.io/"> Back to Portfolio</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
