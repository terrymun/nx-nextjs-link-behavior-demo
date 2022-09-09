import styled from '@emotion/styled';
import Link from 'next/link';

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1em;
  }

  a {
    color: steelblue;
    text-decoration: underline;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <h1>Nx + Next.js</h1>
      <ul>
        <li><Link href="https://example.com" data-testid="link">Link element with new behavior</Link></li>
        <li><Link href="https://example.com" data-testid="link"><strong data-testid="content">Link element with new behavior</strong></Link></li>
        <li><Link href="https://example.com" legacyBehavior><a href="#" data-testid="link">Link element with legacy behavior</a></Link></li>
      </ul>
    </StyledPage>
  );
}

export default Index;
