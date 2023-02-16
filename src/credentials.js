import { browser } from '$app/environment';

export function writable(key) {
	// Read the initial value;
	let value = null;

	if (browser) {
		value = window.sessionStorage.getItem(key);
	}

	// Keep a set of subscribers.
	const subscribers = new Map();

	// Provide some constants so we know what type of token this is.
	let scope = null;

	let scoped = Symbol();
	let unscoped = Symbol();

	// get gets the initial value.
	function get() {
		return value;
	}

	// set sets the value and notifies all subscribers.
	function set(new_value, kind) {
		value = new_value;
		scope = kind;

		if (browser) {
			window.sessionStorage.setItem(key, value);
		}

		subscribers.forEach((run) => {
			run(value, scope);
		});
	}

	// remove unsets the session storage and notifies subscribers.
	function remove() {
		value = null;
		scope = null;

		if (browser) {
			window.sessionStorage.removeItem(key);
		}

		subscribers.forEach((run) => {
			run(value, scope);
		});
	}

	// subscribe registers the new callback and notifies
	// it of the current value.
	function subscribe(id, run) {
		subscribers.set(id, run);

		// Only notify the subscriber of an initial value if there is one.
		if (value != null) {
			run(value, scope);
		}
	}

	// unsubscribe removes the subscription on unmount.
	function unsubscribe(id) {
		subscribers.delete(id);
	}

	return { get, set, remove, subscribe, unsubscribe, scoped, unscoped };
}

// token is the main token storage.
export let token = writable('token');