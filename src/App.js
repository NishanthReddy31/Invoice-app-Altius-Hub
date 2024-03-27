// import logo from './logo.svg';
import './App.css';
import AddInvoice from './Components/AddInvoice/AddInvoice';
import Home from './Components/Home/Home';
import InvoiceItem from './Components/InvoiceItem/InvoiceItem';
import InvoiceList from './Components/InvoiceList/InvoiceList';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"
import UpdateInvoice from './Components/UpdateInvoice/UpdateInvoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="invoiceList" element={<InvoiceList />} />
        <Route exact path="invoiceItem" element={<InvoiceItem />} />
        <Route exact path="addInvoice" element={<AddInvoice />} />
        <Route exact path="updateInvoice" element={<UpdateInvoice />} />
        <Route exact path="/" element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
