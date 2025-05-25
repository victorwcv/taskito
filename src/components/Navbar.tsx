const Navbar: React.FC = () => {
  return (
    <header className="sm:block hidden w-full h-16 z-40 bg-zinc-900 text-white sticky top-0">
      <div className="container mx-auto px-4 h-full sm:flex hidden justify-between items-center">
        <a href="https://victorwcv.github.io/taskito/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Taskito -  <span className="text-cyan-400">Kanban Board</span></h1>
        </a> 

        <nav className="block">
          <ul className="flex md:gap-12 gap-8 font font-semibold">
            <li className="hover:text-primary">
              <a href="https://victorwcv.github.io/"> Back to Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
