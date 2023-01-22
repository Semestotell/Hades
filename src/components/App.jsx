import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Sales } from "./Sales/Sales";
import { Invoices } from './Sales/Invoices/Invoices'
import { InvoiceDeteails } from "./Sales/Invoices/invoiceDetails/invoiceDetails";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Hades" element={<Layout />}>
          <Route path="dashboard" element={<></>}></Route>
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDeteails />} />
            </Route>
            <Route path= "deposites" element={<div>Deposites</div>}/>
          </Route>
          <Route path="reports" element={<></>}></Route>
          <Route path="feedback" element={<></>}></Route>
          <Route path="customers" element={<></>}></Route>
        </Route>
      </Routes>
    </>
  )
};
