import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

// 添加 export 关键字
export const blogPostsData = {
  1: {
    id: 1,
    title: "Understanding Your Cat's Body Language 🐱",
    date: "2024-03-15",
    readTime: "5 min read",
    emoji: "😺",
    category: "Behavior Guide",
    content: [
      {
        type: "introduction",
        content: "Cats are masters of subtle communication. While they may not speak our language, they're constantly telling us how they feel through their body language. Let's decode these silent messages! 🔍"
      },
      {
        type: "section",
        title: "Tail Positions 🐈",
        content: [
          "• Tail straight up with a slight curve: Your cat is happy and greeting you warmly!",
          "• Tail puffed up: Your cat is frightened or feeling threatened",
          "• Low tail with a curve: Your cat is feeling cautious or uncertain",
          "• Tail wrapped around you: This is like a cat hug - they're showing affection!"
        ]
      },
      {
        type: "section",
        title: "Ear Movements 👂",
        content: [
          "• Forward-facing ears: Your cat is interested and alert",
          "• Flattened ears: Sign of fear or aggression",
          "• Relaxed ears pointing slightly to the sides: Your cat is calm and content",
          "• One ear back, one forward: Your cat is monitoring multiple directions"
        ]
      },
      {
        type: "section",
        title: "Eye Contact 👀",
        content: [
          "• Slow blinks: This is a cat kiss! They're showing trust and affection",
          "• Dilated pupils: Could mean excitement or fear",
          "• Half-closed eyes: Your cat is relaxed and trusting",
          "• Direct stare: Could be a sign of aggression or challenge"
        ]
      },
      {
        type: "tips",
        title: "Pro Tips 💡",
        content: [
          "1. Always consider the whole picture - look at multiple body language signals together",
          "2. Context matters! The same signal might mean different things in different situations",
          "3. Each cat is unique - get to know your cat's personal communication style",
          "4. Never force interaction if your cat is showing signs of stress"
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: "Why Do Cats Purr? The Science Behind It 🔊",
    date: "2024-03-10",
    readTime: "4 min read",
    emoji: "😻",
    category: "Cat Science",
    content: [
      {
        type: "introduction",
        content: "The gentle rumble of a cat's purr is one of the most soothing sounds in the world. But did you know this simple sound is actually a fascinating biological mechanism? Let's explore the science behind purring! 🔬"
      },
      {
        type: "section",
        title: "The Mechanics of Purring 🎵",
        content: [
          "• Purring occurs at frequencies between 25-150 Hz",
          "• It's produced by rapid twitching of the muscles in the larynx",
          "• Cats can purr both while inhaling and exhaling",
          "• The rhythm is remarkably consistent and regular"
        ]
      },
      {
        type: "section",
        title: "Healing Properties 🌟",
        content: [
          "• The frequency range of purring can promote tissue regeneration",
          "• It may help heal bones and muscles",
          "• Purring might reduce stress and lower blood pressure",
          "• It could help with pain management"
        ]
      },
      {
        type: "section",
        title: "When Cats Purr 🕒",
        content: [
          "• During positive experiences (contentment)",
          " When in pain or distress (self-soothing)",
          "• While nursing kittens",
          "• To communicate with humans"
        ]
      }
    ]
  },
  3: {
    id: 3,
    title: "Common Cat Behaviors Decoded 🔍",
    date: "2024-03-05",
    readTime: "6 min read",
    emoji: "🐈",
    category: "Daily Tips",
    content: [
      {
        type: "introduction",
        content: "Ever wondered why your cat does those quirky things? From kneading your lap to bringing you 'presents', let's explore the fascinating reasons behind common cat behaviors! 🐱"
      },
      {
        type: "section",
        title: "Kneading (Making Biscuits) 🫳",
        content: [
          "• A behavior from kittenhood - kittens knead their mother while nursing",
          "• Shows contentment and comfort",
          "• Marking territory with scent glands in paws",
          "• May indicate your cat feels safe and secure with you"
        ]
      },
      {
        type: "section",
        title: "Bringing 'Presents' 🎁",
        content: [
          "• Natural hunting instinct",
          "• Teaching you hunting skills",
          "• Showing affection",
          "• Sharing their success"
        ]
      },
      {
        type: "section",
        title: "Scratching Furniture 🛋️",
        content: [
          "• Marking territory",
          "• Stretching muscles",
          "• Maintaining claw health",
          "• Stress relief"
        ]
      }
    ]
  },
  4: {
    id: 4,
    title: "How AI Helps Us Understand Cats Better 🤖",
    date: "2024-03-01",
    readTime: "7 min read",
    emoji: "🧠",
    category: "Technology",
    content: [
      {
        type: "introduction",
        content: "Explore how Google's Gemini AI model helps decode cat behavior patterns. Learn about the technology behind Cat Translator and how it's revolutionizing the way we communicate with our feline friends."
      },
      {
        type: "section",
        title: "AI Technology 🔬",
        content: [
          "• Advanced pattern recognition",
          "• Behavioral analysis",
          "• Emotional interpretation",
          "• Real-time processing"
        ]
      },
      {
        type: "section",
        title: "Benefits 📱",
        content: [
          "• Better understanding of cat needs",
          "• Early detection of health issues",
          "• Improved cat-human bond",
          "• Personalized care recommendations"
        ]
      }
    ]
  },
  5: {
    id: 5,
    title: "Cat Moods and What They Mean 😸",
    date: "2024-02-28",
    readTime: "5 min read",
    emoji: "😾",
    category: "Behavior Guide",
    content: [
      {
        type: "introduction",
        content: "From playful to grumpy, learn to read your cat's different moods. Understanding these emotional states helps build a stronger bond with your pet and ensures their wellbeing."
      },
      {
        type: "section",
        title: "Happy Mood Signs 😊",
        content: [
          "• Tail held high",
          "• Soft purring",
          "• Relaxed whiskers",
          "• Slow blinking"
        ]
      },
      {
        type: "section",
        title: "Stress Signals ⚠️",
        content: [
          "• Flattened ears",
          "• Dilated pupils",
          "• Tail twitching",
          "• Excessive grooming"
        ]
      }
    ]
  },
  6: {
    id: 6,
    title: "The Secret Language of Cat Tails 📝",
    date: "2024-02-25",
    readTime: "4 min read",
    emoji: "🐱",
    category: "Body Language",
    content: [
      {
        type: "introduction",
        content: "Your cat's tail is like a mood indicator! Discover what different tail positions and movements mean - from the friendly upright question mark to the wary low swish."
      },
      {
        type: "section",
        title: "Tail Positions 📊",
        content: [
          "• Upright with curve: Happy greeting",
          "• Puffed up: Startled or afraid",
          "• Low and straight: Focused hunting",
          "• Wrapped around you: Affection"
        ]
      },
      {
        type: "section",
        title: "Movement Meanings 🔄",
        content: [
          "• Quick twitches: Excitement",
          "• Slow swaying: Concentration",
          "• Rapid swishing: Agitation",
          "• Gentle waving: Greeting"
        ]
      }
    ]
  }
  // ... 可以继续添加其他文章的详细内容
};

export default function BlogPost({ post }) {
  const { t } = useTranslation('common');

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found 😿</h1>
        <Link href="/blog">
          <span className="text-indigo-600 hover:text-indigo-800">← Back to Blog</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Cat Translator Blog</title>
        <meta name="description" content={post.content[0].content} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content[0].content} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://cat.jellyw.com/blog/posts/${post.id}`} />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto prose prose-lg">
          <Link href="/blog">
            <span className="text-indigo-600 hover:text-indigo-800">← Back to Blog</span>
          </Link>
          
          <header className="text-center my-12">
            <div className="text-6xl mb-4">{post.emoji}</div>
            <div className="text-sm text-indigo-500 font-semibold mb-2">
              {post.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-600">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {post.content.map((section, index) => (
            <section key={index} className="mb-8">
              {section.type === "introduction" ? (
                <p className="text-xl text-gray-700 mb-8">{section.content}</p>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </>
              )}
            </section>
          ))}
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "articleSection": post.category,
              "publisher": {
                "@type": "Organization",
                "name": "Cat Translator"
              }
            })
          }}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  // 确保 params.id 是数字
  const postId = parseInt(params.id);
  const post = blogPostsData[postId];
  
  if (!post) {
    return {
      notFound: true, // 这会显示 404 页面
    };
  }
  
  return {
    props: {
      post,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
} 