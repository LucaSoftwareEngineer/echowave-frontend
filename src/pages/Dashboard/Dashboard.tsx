import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="p-4 sm:ml-64">
          <div className="mt-[60px] md:mt-[50px]">
            <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="rounded-t-lg bg-[#06bd8f] p-3">
                <a className="cursor-pointer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Dashboard
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Benvenuto nella tua Dashboard, in questa pagina puoi vedere un
                  riepilogo delle playlist e dei brani che hai salvato.
                  <br />
                  Utilizzando la sidebar (il menù alla tua sinistra) puoi
                  caricare un nuovo brano, creare una nuova playlist e vedere
                  l'elenco dei brani e delle playlist.
                </p>
                <br />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className="mt-[25px] w-full rounded-lg border border-gray-200 bg-white shadow-sm md:w-[98%]">
                <div className="rounded-t-lg bg-[#06bd8f] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Dettagli Utente
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-[5px] text-[#06bd8f]">
                          <b>Email:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">{}</td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#06bd8f]">
                          <b>Tipologia di account:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">
                          Amministratore
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#06bd8f]">
                          <b>Foto profilo:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">
                          <img
                            src="./user-profile-foto.PNG"
                            className="w-[30px]"
                            alt="user-profile-photo.PNG"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-[25px] w-full rounded-lg border border-gray-200 bg-white shadow-sm md:w-full">
                <div className="rounded-t-lg bg-[#06bd8f] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Report
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <div className="w-full md:w-full lg:w-full">
                    <table>
                      <tbody>
                        <tr>
                          <td className="p-[5px] text-[#06bd8f]">
                            <b>Numero di brani:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {}
                            &nbsp; brani
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#06bd8f]">
                            <b>Numero di playlist:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {}
                            &nbsp; playlist
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#06bd8f]">
                            <b>Contenuti tolati:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {}
                            &nbsp; contenuti
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
