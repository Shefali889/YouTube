import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./component/Maincontainer";
import Watchpage from "./component/Watchpage";

function App() {
const appRouter = createBrowserRouter([{
  path : "/",
  element :<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<Watchpage/>
    }
  ]
}])

  return (
    <Provider store={store}>
    <div>
      
   <Head/>
   <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
