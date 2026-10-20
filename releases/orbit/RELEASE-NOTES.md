# Orbit 0.3 beta

20 October 2026 · LanceDevOps

## A home for your AI team

Orbit now opens with a personal startup hub. Start a conversation, return to your most recent one, manage providers and models, or choose the team’s voices. The branded loading screen follows actual loading, without an artificial progress timer.

## Install it on your device

Use **Install Orbit** in the app. Compatible browsers can install it in a dedicated window. The guide covers Android, iPhone/iPad and desktop browsers. Artwork includes 192 and 512 pixel icons, a maskable icon, an Apple touch icon and a social image.

An offline screen helps users reconnect. It contains no conversations. AI replies, sign in and saved conversations require internet. Updates use the normal service worker lifecycle after old app windows close, without interrupting conversations.

## The experience

- Slowly moving Milky Way, textured floating planets and motion controls.
- Distinct voices for each AI and Nova. Natural speech uses your OpenAI key; device voices are also available.
- Model choices per AI, custom connections, Team chat, One AI and Workflow modes.
- Nova’s final answer, timeout recovery, round controls, saved history and Markdown export.
- Quick guide, API billing disclosures, data handling information and recovery screens.

## Checks and limits

TypeScript and 73 automated tests pass. Tests cover conversation flow, account isolation, encrypted keys, routing, concurrency, timeouts, speech and the offline cache boundary. Native iOS/Android install acceptance remains a physical device check.

This is a web app, not a native store binary. API calls and natural speech may cost money even though Orbit itself is free. AI can make mistakes. The app does not run generated code or control external applications.
