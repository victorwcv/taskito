import ToggleSidebarButton from "./ToggleSidebarButton";

interface Props {
  children?: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <header className="h-20 bg-zinc-100 shadow">
      <div className="mx-auto px-8 h-full flex items-center space-x-8">
        <ToggleSidebarButton />
        <div>{children ? children : null}</div>

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
