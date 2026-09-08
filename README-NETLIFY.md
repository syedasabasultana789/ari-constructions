# ARI Constructions — Netlify Ready

## Recommended deployment
1. Upload this project to GitHub.
2. In Netlify choose **Add new project → Import an existing project** and select the GitHub repository.
3. Netlify will read `netlify.toml` automatically.
4. Build command: `npm run build`
5. Publish directory: `dist/ari-constructions/browser`
6. Deploy.

Node 24.15.0 and Angular 22.1.7 are configured for compatibility.

## Local build
```bash
npm install
npm run build
```
The deploy folder is `dist/ari-constructions/browser`.
