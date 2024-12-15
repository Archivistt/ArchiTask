import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EndDrawer from "./EndDrawer.jsx"




createRoot(document.getElementById('root')).render(
    <Provider>
        <StrictMode>
            <EndDrawer />,    
        </StrictMode>
    </Provider>
)
