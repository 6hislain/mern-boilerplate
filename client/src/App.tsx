import { ReactNode } from "react";
import Navbar from "./components/Navbar";

function App({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="d-flex justify-content-center align-items-center bg-body-tertiary min-vh-100">
        {children}
      </main>
    </div>
  );
}

export default App;
