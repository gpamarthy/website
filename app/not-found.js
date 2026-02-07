const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath !== undefined ? configuredBasePath : "/new-website";

export default function NotFound() {
  return (
    <div className="section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="pill">404</p>
      <h1 className="text-main mt-4 text-3xl font-semibold">Mission not found.</h1>
      <p className="text-muted mt-2">The page you requested does not exist. Return to the command deck.</p>
      <a href={`${basePath}/#home`} className="btn-primary mt-6">
        Back to Home
      </a>
    </div>
  );
}
