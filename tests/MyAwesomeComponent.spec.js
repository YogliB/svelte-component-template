import MyAwesomeComponent from '../src/components/MyAwesomeComponent.svelte';
import { render } from '@testing-library/svelte';

describe('MyAwesomeComponent', () => {
  test('should render greeting', () => {
    const { getByText } = render(MyAwesomeComponent, {
      props: { name: 'world' },
    });

    // eslint-disable-next-line jest/valid-expect
    expect(getByText('Hello world!'));
  });
});
