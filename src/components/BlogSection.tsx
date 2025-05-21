import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Steel Locker for Your Gym",
    excerpt: "Learn about the key factors to consider when selecting steel lockers for your fitness facility, from size to security features.",
    image: "/images/blog/gym-lockers.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    slug: "choose-perfect-steel-locker-gym"
  },
  {
    id: 2,
    title: "Custom Closet Design: Maximizing Your Storage Space",
    excerpt: "Discover innovative ways to design custom closets that maximize storage while maintaining style and functionality.",
    image: "/images/blog/custom-closet.jpg",
    date: "2024-03-10",
    readTime: "7 min read",
    slug: "custom-closet-design-maximizing-storage"
  },
  {
    id: 3,
    title: "The Benefits of Steel Lockers in Educational Institutions",
    excerpt: "Explore why steel lockers are the preferred choice for schools and universities, from durability to security.",
    image: "/images/blog/school-lockers.jpg",
    date: "2024-03-05",
    readTime: "6 min read",
    slug: "benefits-steel-lockers-education"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest trends in storage solutions and get expert advice
            on choosing the right products for your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 p-0"
                  >
                    Read More →
                  </Button>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 