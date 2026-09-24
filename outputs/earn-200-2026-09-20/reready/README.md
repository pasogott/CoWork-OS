# ReReady sandbox investigation

Started 20 September 2026. Research identity: **almarionai**. No account created, message sent, vulnerability submitted, reward awarded or payment received.

## Authorization and scope

The [official bounty policy](https://www.reready.co/help/vulnerability-bug-bounty-program) directs researchers to the free sandbox and explicitly permits responsible AI-agent testing that does not degrade it. Only `https://sandbox.reready.co` is a testing target here. Production pages were read for documentation only.

[Sandbox behavior](https://www.reready.co/help/is-there-a-sandbox-environment): emails are real; payments, SMS, shipping labels and shipments are disabled. Use only accounts, organizations, recipient inboxes and synthetic records controlled by this research. No third-party identities, arbitrary object IDs, password guessing or load testing.

## Completed checks

Evidence: [unauthenticated-checks.json](unauthenticated-checks.json).

- Login and signup pages returned HTTP 200, as expected for public pages.
- The documented device-transfer list endpoint, requested without credentials, returned HTTP 401. This check found no anonymous access to that collection.
- Those responses included HSTS, same-origin framing protection, `nosniff`, a CSP and a referrer policy. Observed session cookies had Secure, HttpOnly and SameSite attributes. Presence of headers does not prove the application is secure.
- Three GET requests, no form submissions; cross-host redirects refused; response bodies were not saved. No security finding established.

## Account setup pending

[Account-only signup](https://sandbox.reready.co/users/sign_up) requires organization label, name, email and acceptance of Terms of Service. Phone and expected order volume are optional. A reCAPTCHA component is present. The form does not label the name field as legal name; this is not proof of a guaranteed pseudonymous payout.

Proposed research labels: `almarionai` and `almarionai research A`. Do not enter employer details or the personal PayPal address. A user-controlled alias email is needed, followed by verification. A second controlled account/organization may be needed for isolation checks. No alias email has been supplied yet.

The browser tool requires action-time confirmation before accepting Terms of Service or completing a CAPTCHA; new credential entry must be completed by the user. These are tool constraints, not extra requirements imposed by ReReady's bounty page. Do not submit an incomplete form or invent an email address.

## Evidence standard

For any candidate, record expected permission, actual response, roles, synthetic record identifier, exact minimal reproduction and demonstrated security impact. Keep credentials, session cookies and personal details out of notes. A UI-only restriction is not proof of a vulnerability, and an access-denied response is a passing control. Do not assign a payout amount before the program validates severity and eligibility.

## Prioritized authenticated checks

1. **Organization isolation:** create an innocuous record in each of two controlled organizations. Verify each account can read only its own record through the normal UI and observed requests. Use only the known IDs of our records; do not enumerate IDs. If sub-accounts are available, verify sibling customer isolation too. [Sub-account documentation](https://www.reready.co/sub-accounts) expressly limits customers to their associated orders.
2. **Role boundaries:** if additional users are available without real purchases, compare a non-admin with its organization's admin. [Additional-user documentation](https://www.reready.co/additional-users) permits ordinary users to place orders but reserves administrative actions. The [API documentation](https://www.reready.co/rest-api-documentation) says API use is admin-only. Simply possessing an admin's bearer token is not an authorization bypass.
3. **Key revocation:** if the sandbox provides API keys, capture one successful read, explicitly revoke the test key, then repeat the same read and document rejection or any continued validity. Public docs do not promise per-key scopes or a precise revocation delay, so missing scopes alone is not a finding.
4. **Customer-ID binding:** with owned parent/sub-account fixtures only, verify another customer's identifier cannot expose or mutate its record from the wrong user context. Parent admins are intentionally allowed to act for sub-accounts; authorized parent access is not a bug.

Feature gate: public docs restrict multiple users/sub-accounts and API access to Enterprise/Custom; the API also documents a payment method prerequisite. It is not yet known whether sandbox testing unlocks these features freely. Do not add a real payment method or purchase a plan. Start with available free UI controls and record any gate rather than assuming API access will work.

## Payment and timing

The program advertises $100 low, $200 medium, $500 high and $1,000 critical; informational awards are discretionary. It promises a reply within five business days and payment after agreement on validity/rating. One-week receipt is uncertain. The user has explicitly accepted client-facing PayPal details, so recipient-name visibility is no longer a blocker. Keep public identity almarionai. The USD200 urgent target is a minimum, not a ceiling; investigate all eligible severities based on actual impact.
