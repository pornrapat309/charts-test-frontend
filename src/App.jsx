import Route from "./router/Route";
import Loading from "./components/Loading";
import { useProduct } from "./hooks/use-product";

function App() {
  const { initialLoading } = useProduct();
  if (initialLoading) {
    return <Loading />;
  }

  return <Route />;
}

export default App;
