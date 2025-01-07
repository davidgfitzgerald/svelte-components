import * as auth from '$lib/server/auth.js';
import { redirect } from '@sveltejs/kit';

const handleAuth = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);
	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		if (event.url.pathname != "/login") {
			return redirect(302, '/login')
		}
		return resolve(event)
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);
	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;

	if (!session) {
		return redirect(302, '/login')
	}

	return resolve(event);
};

export const handle = handleAuth;
