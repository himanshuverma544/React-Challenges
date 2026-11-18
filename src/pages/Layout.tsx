import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import Home from "./../assets/home.svg?react";

import { HOME } from "./../routes.ts";


export default function Layout() {

  const [ searchParams ] = useSearchParams();
  const title = searchParams.get("title");

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          backgroundColor: '#f1f1f1',
          borderBottom: '1px solid #ccc',
          zIndex: 10
        }}
      >
        <NavLink
          to={HOME.pathname}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Home
            width={20}
            height={20}
            style={{ position: 'absolute', left: '20px' }}
          />
        </NavLink>
  
        <div>{title || HOME.title}</div>
      </header>

  
      <main style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Outlet /> 
      </main>

      <footer
        style={{ 
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          backgroundColor: '#f1f1f1',
          borderTop: '1px solid #ccc',
          fontSize: '14px',
          color: '#666',
          zIndex: 10
        }}
      >
        React Challenges
      </footer>
    </>
  );
}
