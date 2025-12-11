import Head from "next/head";
import posts from "../data/articles.json";

export default function Home() {
  const latestPost = posts[0];
  const olderPosts = posts.slice(1, 4);

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <Head>
        <title>MysteryFiles</title>
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="text-2xl font-bold">MysteryFiles</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
      </header>

      {/* Latest Post */}
      <section className="p-6">
        <div className="w-full mb-12">
          <img src={latestPost.image} alt={latestPost.title} className="w-full h-80 object-cover rounded" />
          <h2 className="mt-4 text-3xl font-bold">{latestPost.title}</h2>
          <p className="mt-2 text-gray-300">{latestPost.excerpt}</p>
        </div>

        {/* Older Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {olderPosts.map((post, index) => (
            <div key={index}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
              <p className="mt-1 text-gray-400">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t border-gray-800 flex items-center">
        <div className="text-lg font-bold">MysteryFiles</div>
      </footer>
    </div>
  );
}
