// main component, acts like the "home page" 

import "./App.css";
import Navbar from "../components/Navbar";  

function App() {
  // let userName = "Filza";
  const styles = {
    container: {
      backgroundColor: '#23272f', // Dark background
      color: 'white',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
    },
    // Hero Section Styling
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 20px',
    },
    logo: {
      width: '120px',
      height: '120px',
      marginBottom: '20px',
    },
    mainTitle: {
      fontSize: '64px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },
    subTitle: {
      fontSize: '32px',
      fontWeight: '600',
      color: '#ebedf0',
      marginBottom: '40px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
    },
    btnPrimary: {
      backgroundColor: '#58C4DC',
      color: '#404756',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
    },

    btnSecondary: {
      backgroundColor: 'transparent',
      color: '#ebedf0',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '18px',
      fontWeight: '600',
      border: '1px solid #404756',
      cursor: 'pointer',
      textDecoration: 'none',
    }
  }
  return (

     <div style={styles.container}>
      {/* <h1>Hello</h1>
      <p>Hello {userName} </p> */}

      <Navbar/>

{/* Hero Section */}
      <main style={styles.hero}>
        <div style={styles.logo}>
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
            <circle cx="0" cy="0" r="2.05" fill="#58c4dc"/>
            <g stroke="#58c4dc" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
        <h1 style={styles.mainTitle}>React</h1>
        <h2 style={styles.subTitle}>The library for web and native user interfaces</h2>
        
        <div style={styles.buttonGroup}>
          <button style={styles.btnPrimary}>Learn React</button>
          <button style={styles.btnSecondary}>API Reference</button>
        </div>
      </main>




     </div>
    
  );
}

export default App;



