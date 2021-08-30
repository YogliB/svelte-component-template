import '@testing-library/jest-dom';
import First from './First.svelte';
import { render } from '@testing-library/svelte';
import { Jane } from './First.stories'; //👈  Our story imported here

test('renders the component with a specific name and text color', () => {
	//👇 Story's args used with our test
	const { container, getByText } = render(First, {
		props: Jane.args,
	});

	expect(container).toHaveTextContent(`Hello ${Jane.args.name}`);
	expect(getByText(`Hello ${Jane.args.name}`)).toHaveStyle(
		`color: ${Jane.args.textColor}`
	);
});
