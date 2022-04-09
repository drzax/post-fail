export const post = async ({ request }) => {
	const input = (await request.formData()).get('input') as string;
	return { code: 200, body: { echo: input } };
};
