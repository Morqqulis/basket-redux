import ReduxProvider from "./ReduxProvider"
import RouterDOM from "./RouterDOM"
import UIProvider from "./UIProvider"

const Provider = ({ children }) => {
  return (
    <>
      <ReduxProvider>
        <UIProvider>
          <RouterDOM>{children}</RouterDOM>
        </UIProvider>
      </ReduxProvider>
    </>
  );
};

export default Provider;
