import MyAwesomeComponent from '../src/components/MyAwesomeComponent.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup); //this is required.

describe('MyAwesomeComponent', () => {
	it('Should render a greeting', () => {
		const { container } = render(MyAwesomeComponent, {
			props: { name: 'world' },
		});

		expect(container.querySelector('h1')).toHaveTextContent('Hello world!');
	});
});
