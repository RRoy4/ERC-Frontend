# SPA Routing Configuration

This project uses React Router for client-side routing. When deployed to production, the server needs to be configured to serve `index.html` for all routes to enable proper SPA navigation.

## Configuration Files

This repository includes configuration files for multiple hosting platforms:

### 1. Vercel (`vercel.json`)
Automatically redirects all routes to `index.html` when deployed to Vercel.

### 2. Netlify (`netlify.toml` and `public/_redirects`)
The `_redirects` file in the `public/` folder is copied to the build output and tells Netlify to serve `index.html` for all routes.

### 3. GitHub Pages
GitHub Pages doesn't support traditional server-side redirects, but there's a workaround:
- Create a `public/404.html` file that's a copy of your `index.html`
- GitHub Pages serves 404.html for missing routes, which loads your React app
- React Router then handles the routing client-side
- **Alternative**: Use HashRouter instead of BrowserRouter (URLs will have `#` like `/#/week2`)

### 4. Apache Servers
For Apache servers, add a `.htaccess` file in your public directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Why This Is Needed

React Router uses the browser's History API for client-side navigation. When you:
- Navigate within the app (e.g., click Week 2 button) → Works fine (client-side)
- Directly access a route (e.g., type `/week2` in browser) → Server needs to serve index.html
- Refresh the page on any route → Server needs to serve index.html

Without proper configuration, the server returns a 404 error because it looks for a physical file at `/week2`, which doesn't exist in a SPA.

## Testing

### Development
`npm run dev` - Vite dev server has built-in SPA support, so routing works automatically.

### Production Preview
`npm run build && npm run preview` - Test the production build locally before deployment.

### Production
After deployment, test by:
1. Navigating to the root URL
2. Clicking on week buttons to navigate
3. Refreshing the page while on a nested route
4. Directly accessing a nested route (e.g., `yourdomain.com/week2`)

All scenarios should work without 404 errors.
