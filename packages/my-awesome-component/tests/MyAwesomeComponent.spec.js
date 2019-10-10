import MyAwesomeComponent from '../src/components/MyAwesomeComponent.svelte';
import { render } from '@testing-library/svelte';

describe('MyAwesomeComponent', () => {
	it('Should render a greeting', () => {
		const { container } = render(MyAwesomeComponent, {
			props: { name: 'world' },
		});

		expect(container.querySelector('h1')).toHaveTextContent('Hello world!');
	});
});
