import { React, useContext } from "react";

import Theme1 from "./../../Theme/Theme1/Theme1";


const Home = () => {
  // const { currentTheme, showComponent, themeData, componentRef } =
  //   useContext(ResumeContext);

  return (
    <>
      <BuilderArea
        theme={<Theme1 componentRef={componentRef} themeData={themeData} />}
      />
    </>
  );
};

export default Home;
