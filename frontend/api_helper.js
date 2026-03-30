const DEFAULT_API_BASE = "http://127.0.0.1:8000";

function getApiBase() {
	const configuredBase = window.localStorage.getItem("apiBaseUrl");
	if (configuredBase) {
		return configuredBase.replace(/\/$/, "");
	}

	if (window.location.protocol === "file:") {
		return DEFAULT_API_BASE;
	}

	return `${window.location.protocol}//${window.location.host}`;
}

export async function apiRequest(endpoint, options = {}) {
	const token = localStorage.getItem("token");
	const res = await fetch(getApiBase() + endpoint, {
		...options,

		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
			...options.headers,
		},
	});
	if (!res.ok) {
		throw new Error(`API request failed with status ${res.status}`);
	}

	return res.json();
}
