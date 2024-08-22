import React, { useEffect } from 'react';

const Utterances: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'jiewong42/utteranc');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'preferred-color-scheme');
    script.crossOrigin = 'anonymous';

    const scriptParentNode = document.getElementById('comments');
    if (scriptParentNode) {
      scriptParentNode.appendChild(script);
    }

    return () => {
      if (scriptParentNode) {
        scriptParentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="comments"></div>;
};

export default Utterances;