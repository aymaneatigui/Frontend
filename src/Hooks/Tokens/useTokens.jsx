export const useTokens = () => {
	const setToken = (token, exp) => {
		const expires = new Date(exp * 1000).toUTCString();
		document.cookie = `access=${token}; expires=${expires};`;
	};

	const useToken = () => {
		const Tokens = document.cookie;
		if (Tokens) {
			const access = Tokens.split(';').find((row) =>
				row.trim().startsWith('access=')
			);
			if (access) {
				return access.split('=')[1];
			}
		}
		return null;
	};

	return { setToken, useToken };
};
