import { renderComponent , expect } from '../test_helper';
import App from '../../src/containers/app';

describe('App' , () => {
  let container;

  beforeEach(() => {
    container = renderComponent(App);
  });

  it('renders the container', () => {
    expect(container).to.exist;
  });
});
