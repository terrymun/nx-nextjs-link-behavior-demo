

# Nx Next.js Link behavior demo

This project was generated using [Nx](https://nx.dev) and it is used to demonstrate Jest failing to render `<Link>` component with experimental behavior.

The rendered output of this following template:

```tsx
<Link href="https://example.com" data-testid="link">
  <strong data-testid="content">Link element with new behavior</strong>
</Link>
```

...is different when checking on Jest vs when serving the site via `yarn start`.

## Rendered output via Jest (incorrect)

This can be verified by checking the inline snapshot generated on `index.spec.tsx`:

```tsx
<strong
  data-testid="content"
>
  Link element with new behavior
</strong>
```

## Actual rendered output on `yarn start` (correct)

This can be verified by running `yarn start` and checking the markup of the served page:

```tsx
<a href="https://example.com">
  <strong
    data-testid="content"
  >
    Link element with new behavior
  </strong>
</a>
```