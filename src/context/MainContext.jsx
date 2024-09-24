
import React, { createContext, useState } from "react";

export const BrightProvider = createContext();

const Provider = ({ children }) => {
      const [user, setUser] = useState({
            name: "Mahadi Hasan",
            email: "test@test.com",
      });

      const provider_object = { user, setUser };

      return <BrightProvider.Provider value={provider_object}>{children}</BrightProvider.Provider>;
};

export default Provider;
