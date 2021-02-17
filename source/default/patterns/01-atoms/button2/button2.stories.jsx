import './index';
import mdx from './button2.mdx';

const patternDefinition = require('./button2.wingsuit.yml');

export const wingsuit = {
  parameters: {
    docs: {
      page: mdx,
    },
  },
  patternDefinition,
};
