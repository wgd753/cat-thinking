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
        title: "Bringing You 'Gifts' 🎁",
        content: [
          "• Natural hunting instinct - they're trying to teach you",
          "• Shows trust and affection",
          "• Sharing their 'catch' with their family",
          "• A way of contributing to the household"
        ]
      },
      {
        type: "section",
        title: "Scratching Furniture 🛋️",
        content: [
          "• Marking territory visually and with scent",
          "• Maintaining claw health",
          "• Stretching muscles",
          "• Stress relief and expression of emotions"
        ]
      },
      {
        type: "tips",
        title: "How to Respond 💡",
        content: [
          "1. Appreciate the intention behind these behaviors",
          "2. Provide appropriate outlets (scratching posts, toys)",
          "3. Never punish natural behaviors",
          "4. Redirect unwanted behaviors positively"
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
        content: "Artificial Intelligence is revolutionizing how we understand our feline friends. Let's explore how Google's Gemini AI helps decode cat behavior and brings us closer to our pets! 🔍"
      },
      {
        type: "section",
        title: "The Power of Gemini AI 💫",
        content: [
          "• Advanced pattern recognition in cat behavior",
          "• Real-time analysis of facial expressions",
          "• Understanding context in different situations",
          "• Learning from millions of cat interactions"
        ]
      },
      {
        type: "section",
        title: "How It Works 🛠️",
        content: [
          "• Analyzes photos and videos of your cat",
          "• Compares with extensive behavior database",
          "• Considers environmental factors",
          "• Provides personalized insights"
        ]
      },
      {
        type: "section",
        title: "Benefits of AI Translation 📱",
        content: [
          "• Better understanding of cat needs",
          "• Early detection of mood changes",
          "• Improved cat-human communication",
          "• Personalized care recommendations"
        ]
      },
      {
        type: "tips",
        title: "Making the Most of AI 💡",
        content: [
          "1. Regular photo/video updates help AI learn",
          "2. Combine AI insights with personal observation",
          "3. Track changes in behavior over time",
          "4. Share feedback to improve accuracy"
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
        content: "Cats experience a wide range of emotions, just like us! Learning to read these moods is key to being a great cat parent. Let's explore the emotional world of our feline friends! 🌈"
      },
      {
        type: "section",
        title: "Happy and Content 😊",
        content: [
          "• Relaxed posture with tail up",
          "• Soft purring and gentle meows",
          "• Slow blinking and relaxed whiskers",
          "• Gentle head-butting (bunting)"
        ]
      },
      {
        type: "section",
        title: "Playful and Excited 🎮",
        content: [
          "• Dilated pupils and perked ears",
          "• Quick, bouncy movements",
          "• Tail twitching at the tip",
          "• Play-hunting behaviors"
        ]
      },
      {
        type: "section",
        title: "Anxious or Stressed 😟",
        content: [
          "• Flattened ears and dilated pupils",
          "• Tail tucked or puffed up",
          "• Hiding or excessive grooming",
          "• Changes in eating habits"
        ]
      },
      {
        type: "tips",
        title: "Supporting Your Cat's Emotional Health 💝",
        content: [
          "1. Provide safe spaces for retreat",
          "2. Maintain consistent routines",
          "3. Respect their mood signals",
          "4. Offer comfort on their terms"
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
        content: "Your cat's tail is like an emotional barometer! This expressive appendage can tell you exactly how your cat is feeling. Let's decode the secret messages hidden in every tail movement! 🔍"
      },
      {
        type: "section",
        title: "Tail Positions 📊",
        content: [
          "• Upright question mark: Happy and confident",
          "• Low and straight: Focused or hunting",
          "• Puffed up: Startled or frightened",
          "• Wrapped around you: Showing affection"
        ]
      },
      {
        type: "section",
        title: "Tail Movements 🔄",
        content: [
          "• Quick twitching: Excited or agitated",
          "• Slow swaying: Focused attention",
          "• Thrashing back and forth: Agitated or angry",
          "• Gentle swishing: Playful mood"
        ]
      },
      {
        type: "section",
        title: "Combined Signals 🎯",
        content: [
          "• Tail + Body Position",
          "• Tail + Ear Position",
          "• Tail + Vocal Sounds",
          "• Tail + Eye Expression"
        ]
      },
      {
        type: "tips",
        title: "Reading Tail Language 💡",
        content: [
          "1. Watch for changes in position",
          "2. Consider the whole body language",
          "3. Note the context of the situation",
          "4. Learn your cat's personal style"
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