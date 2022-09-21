import React from "react";
import { render } from "@testing-library/react";
import nextJest from 'next/jest';
import Link from "next/link";

describe("Index", () => {
  it("should render <Link> element with new behavior", () => {
    const { container } = render(
      <Link href="https://example.com" data-testid="link">
        Link element with new behavior
      </Link>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          href="https://example.com"
          data-testid="link"
        >
          Link element with new behavior
        </a>
      </div>
    `);
  });

  it("should render <Link> element with nested child with new behavior", () => {
    const { container } = render(
      <Link href="https://example.com" data-testid="link">
        <strong data-testid="content">Link element with new behavior</strong>
      </Link>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a 
          href="https://example.com"
          data-testid="link"
        >
          <strong
            data-testid="content"
          >
            Link element with new behavior
          </strong>
        </a>
      </div>
    `);
  });

  it("should render <Link> element with legacy behavior", () => {
    const { container } = render(
      <Link href="https://example.com" legacyBehavior>
        <a href="#" data-testid="link">
          Link element with legacy behavior
        </a>
      </Link>
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          data-testid="link"
          href="#"
        >
          Link element with legacy behavior
        </a>
      </div>
    `);
  });
});
