import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AbautPage } from "./AbautPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
  return (
    <UserProvider>
    <h1>Main app</h1>
    <hr />
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/abaut" element={<AbautPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/*" element={<LoginPage />} /> {/** esto es para cuando la ruta no exista se retorna al login */}
      <Route path="/*" element={<Navigate to="/login" />} /> {/** esto es para cuando la ruta no exista se retorna al login */}
    </Routes>
    </UserProvider>
  )
}
