import Link from "next/link";

export default function NotFound() {
  return (
    <section className='section-padding bg-dark text-light min-h-screen flex items-center justify-center'>
      <div className='container-width text-center'>
        <h1 className='text-6xl md:text-8xl font-bold mb-6 gradient-text'>404</h1>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Page Not Found</h2>
        <p className='text-light/70 mb-8'>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          href='/'
          className='inline-flex items-center px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight/80 transition-colors duration-300'
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
