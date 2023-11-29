
/* import React from "react"; */
import Header from "./component/Header"
import Footer from "./component/Footer";
import { Routes, Route } from 'react-router-dom'
import Main from "./component/Main";
import GuitarsElectrics from "./component/GuitarsElectrics";
import { BassElectrics } from "./component/BassElectrics";
import { GuitarAcustic } from "./component/GuitarAcustic";
import AddProducts from "./component/AddProducts";
import Login from "./component/Login";
import LoginUser from "./component/LoginUser";
import Register from "./component/Register";
import UsersList from "./component/UsersList";
/* import ShoppingCartProduct from "./Reducers/ShoppingCartProduct"; */
const App = () => {

    return (
        <div className="App">
                    <Header />
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="/Main" element={<Main />} />
                        <Route path="/Featured" element={< GuitarsElectrics />} />
                        <Route path="/ByBodyStyle" element={< BassElectrics />} />
                        <Route path='/Featured2' element={< GuitarAcustic />} />
                        <Route path='/AddProducts' element={< AddProducts />} />
                        <Route path="/Login" element={ < Login />}/>
                        <Route path="/LoginUser" element={ < LoginUser />}/>
                        <Route path="/Register" element={ < Register />}/>
                        <Route path="/UserList" element={ < UsersList />}/>
                        {/* <Route path="/Cart" element={ <ShoppingCartProduct/> }/> */}
                    </Routes>
                    <Footer />
        </div>
    )
}
export default App;