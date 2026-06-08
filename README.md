# PixelNotes — fixture de test VibeSafe ⚠️

> **Ce dépôt est un faux projet volontairement non sécurisé.**
> Il sert UNIQUEMENT à tester le **deep scan** de [VibeSafe](https://vibesafe.lopsia.fr).
>
> **Tous les "secrets" sont FACTICES** (valeurs d'exemple, aucune vraie clé n'a jamais
> existé). Ne déploie jamais ce code. Ne réutilise aucune de ces valeurs.

Le repo simule une petite app "vibe-codée" (Next.js + Supabase + Stripe) dans laquelle
l'IA a laissé toutes les failles classiques. Lance un deep scan VibeSafe dessus : il
doit retrouver chaque catégorie ci-dessous.

## Failles plantées (attendu au scan)

### 🔑 Secrets en clair
| Fichier | Faille |
| --- | --- |
| `.env` | Fichier `.env` committé (Critique) + ~11 secrets dedans |
| `lib/supabaseAdmin.js` | Clé Supabase `service_role` hardcodée + Stripe `sk_live_` |
| `pages/api/config.js` | Clés OpenAI / Google hardcodées, renvoyées au client |
| `keys/server.key` | Clé privée RSA committée (PEM) |

Types de secrets : Supabase `service_role` JWT, Stripe `sk_live_`/`sk_test_`,
OpenAI, Anthropic, OpenRouter, GitHub PAT (`ghp_`) + fine-grained (`github_pat_`),
Google API key, AWS access key + secret.

### 🧱 Misconfigurations
| Fichier | Faille |
| --- | --- |
| `docker-compose.yml` | Images `:latest`, bind `0.0.0.0`, mot de passe Postgres en clair |
| `.github/workflows/ci.yml` | `pull_request_target` + checkout du HEAD du PR ("pwn request" → RCE) |
| `next.config.js` | `dangerouslyAllowSVG: true` (XSS via SVG) |
| `vercel.json` | Route wildcard `/(.*)` |

### 📦 Dépendances vulnérables (GitHub Advisory)
| Fichier | Exemples |
| --- | --- |
| `package.json` | `lodash@4.17.15`, `axios@0.21.0`, `minimist@1.2.0`, `next@12.0.7`, `node-fetch@2.6.0`, `jsonwebtoken@8.5.0`, `semver@7.3.0` |
| `scripts/requirements.txt` | `flask==0.12.2`, `django==2.2.0`, `pyyaml==5.1`, `jinja2==2.10`, `urllib3==1.24.1`, `requests==2.19.1` |

## ⚠️ Avertissement

N'utilise ce dépôt que sur ton propre compte, pour tester ton propre scanner.
Les valeurs ressemblant à des clés sont des exemples sans aucune validité.
