import { useNavigate } from "react-router";

const Sidebar = (props: { sidebarClasse: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <aside
        id="logo-sidebar"
        className={props.sidebarClasse}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-l-[#06bd8f] bg-white px-0 pb-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#06bd8f] py-2 pl-[20px] text-[#06bd8f] hover:bg-[#06bd8f] hover:text-white"
              >
                <img
                  src="/icons8-dashboard-94.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/brano/elenco");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#06bd8f] py-2 pl-[20px] text-[#06bd8f] hover:bg-[#06bd8f] hover:text-white"
              >
                <img
                  src="/icons8-music-48.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Elenco Brani</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/brano/aggiungi");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#06bd8f] py-2 pl-[20px] text-[#06bd8f] hover:bg-[#06bd8f] hover:text-white"
              >
                <img
                  src="/icons8-add-48.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Aggiungi Brano</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/playlist/elenco");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#06bd8f] py-2 pl-[20px] text-[#06bd8f] hover:bg-[#06bd8f] hover:text-white"
              >
                <img
                  src="/icons8-playlist-94.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Elenco Playlist</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/playlist/aggiungi");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#06bd8f] py-2 pl-[20px] text-[#06bd8f] hover:bg-[#06bd8f] hover:text-white"
              >
                <img
                  src="/icons8-add-48.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Aggiungi Playlist</span>
              </a>
            </li>
          </ul>
          <div className="mt-[25vh] p-[25px] text-center text-gray-500 md:mt-[35vh]">
            <i>Progettato e sviluppato dal Dott. Luca Santoro</i>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
