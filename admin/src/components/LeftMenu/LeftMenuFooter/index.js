import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a key="website" href="." rel="noopener noreferrer">
          WonGames
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
