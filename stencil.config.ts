import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'helloworld',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
