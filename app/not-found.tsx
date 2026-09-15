import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-kicker">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-copy" style={{ margin: "16px auto 24px" }}>
          The page you are looking for is not available. Return to Pakistan HMTC and continue from the homepage.
        </p>
        <Link className="btn btn-primary" href="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
