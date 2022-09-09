

# Nx Next.js Link behavior demo

This project was generated using [Nx](https://nx.dev) and it is used to demonstrate Jest failing to render `<Link>` component with experimental behavior.

The rendered output of this following template:

```tsx
<Link href="https://example.com" data-testid="link">
  <strong data-testid="content">Link element with new behavior</strong>
</Link>
```

...is different when checking on Jest vs when serving the site via `yarn start`.
