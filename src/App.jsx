import Emergency from "./pages/Emergency"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/HomePage"




function App() {

  return (
<>
<div>
<Routes>
  <Route exact path="/" element={<Home />} />
  {/* <Route path="emergency-call" element={<Emergency />} /> */}
  <Route path="*" element={<Home />} />
</Routes>

</div>
</>
  )
}

export default App
