import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101b1a] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="font-poppins font-bold text-8xl text-[#c8eea0] mb-4">404</div>
        <h1 className="font-poppins font-bold text-3xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
          We couldn’t find that page. Head back to the homepage or contact us if a link brought you here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold text-sm font-bold px-6 py-3 rounded-md">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-gold-outline text-sm font-semibold px-6 py-3 rounded-md">
            Start the Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
