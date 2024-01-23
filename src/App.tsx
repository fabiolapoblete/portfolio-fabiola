import { AppRoutes } from '@portfolio/router';
// import { AppProvider } from "@zocom/app-context";

export function App() {

  return (
    // <AppProvider> 
    <div className='App'>
      <AppRoutes />
    </div>
    // </AppProvider>
  )
}