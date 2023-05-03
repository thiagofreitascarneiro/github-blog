import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home"
import { IssueDetails } from "./pages/IssueDetails";


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/issues/:number" element={<IssueDetails />} />
        </Routes>
    )
}