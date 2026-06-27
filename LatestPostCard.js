import Image from "next/image";
import Link from "next/link";

export default function LatestPostCard({ post }) {
  const image =
    post.images?.find((img) => img?.url)?.url || "/placeholder.jpg";

  return (
    <Link
      href={`/product-details/${post.code}/${post.slug}`}
      className="block w-full"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={post.title}
            fill
            sizes="(max-width:640px) 100vw, 400px"
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-sm font-bold text-slate-900">
            {post.title}
          </h3>

          <p className="mb-3 text-xs text-slate-500">
            {post.region} • {post.kind}
          </p>

          {post.price && (
            <p className="text-base font-extrabold text-orange-500">
              {Number(post.price).toLocaleString("en-US")} د.ك
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}