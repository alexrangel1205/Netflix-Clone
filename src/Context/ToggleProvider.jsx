import { useState } from "react";
import { createContext } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  //DetailModal
  const [modal, setModal] = useState(false);

  const [sBar, setSBar] = useState(false);

  const toggleSideBar = () => {
    setSBar(!sBar)
  };

  const toggleModal = () => {
    setModal(!modal);
    console.log("u toggle");
  };

  //TvDetailModal 
  const [tvModal, setTvModal] = useState(false);

  const toggleTvModal = () => {
    setTvModal(!tvModal);
    console.log('u toggle');
  };

  //
  const [id, setClickedId] = useState(null);
  const handleGetId = (id) => {
    // Set the clicked ID in the state
    setClickedId(id);
  };


  const value = { modal, toggleModal, tvModal, toggleTvModal, id , handleGetId};



  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export default ToggleProvider;