// post/[slug]/page.tsx

import { client, urlFor } from "@/app/client";
import { Post } from "@/app/lib/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  try {
    const data = await client.fetch(query);
    console.log("Fetched data:", data); // Add this for debugging
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("Slug:", params.slug); // Add this for debugging

  const data = (await getData(params.slug)) as Post;

  if (!data) {
    return <div>Error fetching data</div>; // Handle data fetching error
  }

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value)}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };
  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {new Date(data._createdAt).toISOString().split("T")[0]}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}