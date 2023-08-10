export const useTokens = () => {
	const setToken = (access, expires_at) => {
		const expires = new Date(expires_at * 1000).toUTCString();
		document.cookie = `access_token=${access}; expires=${expires};`;
	};

	const useToken = () => {
		const Tokens = document.cookie;
		if (Tokens) {
			const access = Tokens.split(';').find((row) =>
				row.trim().startsWith('access_token=')
			);
			if (access) {
				return access.split('=')[1];
			}
		}
		return null;
	};

	return { setToken, useToken };
};
