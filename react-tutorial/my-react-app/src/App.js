import React from 'react';

function MyComponent() {
  const handleClick = () => alert('Hello, React!');
  return (
  <div>
    <h1 style={{ textAlign: 'center', color:'darkblue'}}>Hello, React!</h1>
   

    <div style={{ textAlign: 'center'}} >
    <button 
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
}} onClick={handleClick }>Click My</button>
    </div>
  </div>
  );
}


export default MyComponent;
