import Link from "next/link";
import Image from "next/image";

export default function Design() {
  return (
    <section id="design" className="text-center mb-50 my-16">
      <h2 className="text-3xl font-bold">Design Projects</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Discover my branding, packaging and illustration projects.
      </p>
      <div className="flex justify-center mt-6">
        <Image
          src="/cover-colage.png"
          width={500}
          height={300}
          alt="Design Preview"
          className="rounded-lg shadow-md"
        />
      </div>
      <Link href="/design-gallery">
        <button className="mt-6 mb-500 px-6 py-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900">
          View Gallery
        </button>
      </Link>
    </section>
  );
}
