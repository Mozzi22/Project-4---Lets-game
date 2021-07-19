const React = require('react');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

React.useLayoutEffect = React.useEffect;

require('enzyme').configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
