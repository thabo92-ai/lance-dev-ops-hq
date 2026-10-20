# Orbit distribution guide

## Live app

https://orbit-console.thabo595.chatgpt.site

The live app is the canonical runtime. Users sign in with ChatGPT and bring their own provider keys. Publish the verified version, then allow public access before sharing its launch links. Public access must not grant visitors the operator’s keys or account data.

## Hugging Face

Upload the contents of `huggingface-space/` to a Static Space, keeping `README.md`, `index.html` and `assets/` at its root. The card declares `sdk: static` and `app_file: index.html`. This is a launch experience, not an independent AI backend. Open Orbit launches the secure app in a new tab.

Do not put provider keys or encryption secrets in a Static Space. Its files are public. No GPU is needed for the launch page. Platform availability and rules are governed by Hugging Face.

Official reference: https://huggingface.co/docs/hub/en/spaces-sdks-static

## Website and GitHub

Publish the existing Orbit WordPress page with its canonical app button and quick guide link. Visitors enter API keys only in the app’s Connections screen.

The public kit lives under `releases/orbit/` in the LanceDevOps repository. It includes the Static Space, release notes, publishing instructions, font notices and artwork. It excludes credentials, conversations, runtime configuration and private Git history. Sharing this kit grants no backend source license.

## Install

Open the app and choose Install Orbit. Follow your browser’s prompt or the displayed platform instructions. The standalone window uses the same secure app and account.

## Operator followup

- Verify installation on physical Android and iOS devices.
- Monitor backend errors and quotas as users arrive.
- Handle account removal requests through studio support.
- Version the public cache when changing cached offline assets.
- To host the full app elsewhere, port authentication, persistence and secret storage first. The Worker output is not a Docker or static deployment bundle.
