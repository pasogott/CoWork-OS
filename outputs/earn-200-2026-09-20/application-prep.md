# Application preparation — CoWork evidence

Prepared 20 September 2026 from the current checkout. This is supporting material, not a submitted application. No qualifications, employment dates, degrees or personal authorship have been inferred from repository access.

**Superseded recommendation:** Do not submit an Outlier application under the current identity constraint. Its [terms](https://outlier.ai/legal/terms-of-use) require accurate personal details and its [privacy policy](https://outlier.ai/legal/privacy-policy) permits customer access to name and résumé details. The portfolio material below remains private preparation; use **almarionai** publicly and do not add employer information. See [current notes](pseudonymous-opportunities.md).

## Verified application entry and limits

[Open the specific Outlier application](https://app.outlier.ai/login?job_post_id=4671609005). The first screen requires the applicant's own Google/email account creation and acceptance of terms. No application has been submitted.

Outlier's [country guidelines](https://outlier.ai/legal/flexible-working-guidelines) list Portugal, subject to project and location restrictions. The [role](https://outlier.ai/coding/fslc) seeks 3+ years of professional full-stack experience; the [FAQ](https://outlier.ai/faq) says at least an associate degree is required. Those personal qualifications remain unverified.

Its [community rules](https://outlier.ai/legal/community-guidelines) require workers to complete certification tests and tasks themselves, with outside tools permitted only when specifically required by an administrator. They also restrict exporting project materials. The advertised GPT/Claude access does not authorize sending live tasks here. Our collaboration for this route is limited to truthful application preparation and unrelated practice; the applicant performs the actual paid work under the project's rules.

## Portfolio project

Public project: https://github.com/CoWork-OS/CoWork-OS

CoWork OS is a TypeScript application with an Electron desktop runtime, React interface, direct command-line interface, model-provider integrations and MCP clients. The repository contains focused Vitest tests and separate TypeScript build targets.

Evidence inspected locally:

| Topic to discuss | Source | What it demonstrates |
|---|---|---|
| Model/API integration | `src/electron/agent/llm/openai-provider.ts` | A provider implementation within the application |
| Regression-test design | `src/electron/agent/llm/__tests__/openai-provider.test.ts` | Cases for malformed tool arguments, interrupted streams, rejected cache controls and credential refresh |
| CLI engineering | `src/cli/main.ts` | Argument parsing and direct CLI command dispatch |
| Integration architecture | `src/electron/mcp/client/MCPClientManager.ts` and `transports/` | Client management and separate transport implementations |
| Build/test discipline | `package.json` | Electron/CLI TypeScript builds, type checking and Vitest commands |

These are repository facts, not proof that the applicant personally authored each subsystem or that all tests currently pass. No tests were run for this application preparation. Describe only contributions you can personally explain.

## Short project description to adapt for a resume

> CoWork OS — open-source TypeScript desktop and CLI application integrating AI providers, tools and workflows. Relevant technical areas include Electron/React, API integration, asynchronous execution, debugging and regression testing. Repository: https://github.com/CoWork-OS/CoWork-OS.

Add your actual role, dates and one specific contribution before using this as experience. Do not add years of professional experience or a degree unless accurate.

## Three examples to select from your actual work

1. A concrete bug you diagnosed: trigger, expected result, observed failure, underlying cause, fix and verification.
2. A reliability decision you personally made: for example, how to recover from interrupted API streams without duplicating tool execution.
3. A test you understand: explain why it would fail before a fix and how it protects user-visible behavior.

These are practice prompts, not answers to an active platform assessment. We can practice using unrelated examples; live assessments must follow the platform's rules.

## Avoid a misleading WhatsApp claim

The current CoWork channel registry describes its WhatsApp integration as Baileys-based and unofficial. That is not evidence of prior Meta WhatsApp Cloud API implementation. For the Carlos prospect, say that Cloud API requirements will be reviewed; do not claim a matching shipped client integration based only on this repository.

## What is still needed from the applicant

- Real employment/project dates and your specific role.
- Actual educational qualification and professional experience for any role requiring them.
- Your own account, identity verification and truthful screening responses.
- Your available working hours and current task rate after acceptance.

## Revenue gate

An account, application or passed assessment is not income. Proceed to an actual paid task with a disclosed rate and a payout date compatible with 27 September. Track completed approved earnings and available PayPal funds separately.
