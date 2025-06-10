import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SkipList from "./components/Skip";
import { SkipsProvider } from "./contexts/SkipContext";
import Postcode from "./components/Postcode";
import WasteType from "./components/WasteType";
import Payment from "./components/Payment";
import PermitCheck from "./components/PermitCheck";

// Layout that includes Header and Outlet for page content
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <SkipsProvider>
      <BrowserRouter>
        <Routes>
          {/* All pages using this layout will show Header */}
          <Route path="/" element={<Layout />}>
            <Route index element={<SkipList />} />
            <Route path="postcode" element={<Postcode />} />
            <Route path="permit-check" element={<PermitCheck />} />
            <Route path="waste-type" element={<WasteType />} />
            <Route path="choose-date" element={<Date />} />
            <Route path="payment" element={<Payment />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </SkipsProvider>
  );
}

export default App;
