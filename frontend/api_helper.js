const API_BASE = "https://student-management-system-t3gh.onrender.com";
const token = localStorage.getItem("token");

export async function apiRequest(endpoint, options = {}) {
	const res = await fetch(API_BASE + endpoint, {
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
