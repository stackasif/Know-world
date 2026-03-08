import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="max-w-[1220px] mx-auto min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-slate-800">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}


export default AppLayout