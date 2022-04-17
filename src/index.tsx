import * as React from 'react';

export const useMyHook = () => {
  let [{
    loading,
    txt
  }, setState] = React.useState<{
    loading: boolean,
    txt: string
  }>({
    loading: false,
    txt: 'loading'
  });

  React.useEffect(() => {
    
  }, []);

  return { loading, txt, setState };
};