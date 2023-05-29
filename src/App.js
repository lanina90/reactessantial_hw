import './App.scss';
import {Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./components/Layout";
import Contacts from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import IAm18 from "./pages/IAm18";
import RequireAuth from "./components/RequireAuth";
import ErrorPage from "./pages/ErrorPage";
import {ThemeProvider} from "./context/ThemeProvider";


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Products/>}/>
          <Route path='product/:id' element={<ProductPage/>}/>
          <Route path="contacts" element={<Contacts/>}/>

          <Route path='auth' element={
            <RequireAuth><IAm18/></RequireAuth>
          }/>
          <Route path="*" element={<ErrorPage />} />

        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
