import "driver.js/dist/driver.css";
import { MainLayout } from "./layouts/MainLayout";
import { MainRouter } from "./routes";
const App = () => {
  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  );
};

export default App;
