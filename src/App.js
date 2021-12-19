import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const App = () => {
 

  useEffect(() => {
    alanBtn({
      key: '057e33d7dc3dba097297475b66a8e9f22e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
         alert("Test command");
        }
        }
      },
    );
  });
  

  return (
    <div>
            <h1>Voice assistant News application</h1>

    </div>
  );
};

export default App;