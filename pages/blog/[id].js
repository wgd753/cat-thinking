import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

// 博客文章数据
const articles = {
  'article-1': {
    title: 'Understanding Your Cat\'s Body Language: A Complete Guide',
    metaDescription: 'Learn to decode your cat\'s body language with our comprehensive guide. Understand tail positions, ear movements, and facial expressions to better communicate with your feline friend.',
    keywords: 'cat body language, cat behavior, cat communication, feline body language, cat tail positions, cat ear positions, cat facial expressions',
    content: `
      Understanding your cat's body language is essential for building a strong bond with your feline companion. This comprehensive guide will help you decode the subtle signals your cat uses to communicate their emotions and needs.

      Body Language Fundamentals:
      1. Tail Positions and Movements
         • Upright tail with slight curve: Happy and confident
         • Puffed up tail: Frightened or aggressive
         • Low tail with hook: Uncertain or mildly aggressive
         • Tail wrapped around you: Showing affection
         • Tail vibrating or quivering: Extreme excitement

      2. Ear Positions and What They Mean
         • Forward-facing: Alert and interested
         • Sideways or "airplane ears": Mild irritation
         • Flattened against head: Fear or aggression
         • Relaxed and slightly forward: Content and comfortable

      3. Facial Expressions and Eye Contact
         • Slow blinks: Showing trust and affection
         • Dilated pupils: Excitement or fear
         • Half-closed eyes: Relaxed and content
         • Direct stare: Challenge or threat
         • Avoiding eye contact: Submission or peace-keeping

      4. Body Postures
         • Arched back: Defensive or frightened
         • Exposed belly: Trust (but not always an invitation for belly rubs)
         • Side sleeping: Complete trust and comfort
         • Crouched position: Ready to pounce or feeling threatened

      Understanding these signals can help you:
      • Prevent conflicts with your cat
      • Identify when your cat is stressed or unwell
      • Create a stronger bond through better communication
      • Make your cat feel more understood and secure

      Remember that each cat is unique, and these signals should be interpreted in context with your cat's personality and situation. Pay attention to combinations of body language signals for the most accurate interpretation of your cat's mood and intentions.
    `,
    author: 'Dr. Sarah Wilson',
    authorCredentials: 'Ph.D. in Feline Behavior, Certified Animal Behaviorist',
    date: '2024-03-15',
    category: 'Cat Behavior',
    readingTime: '8 minutes'
  },
  'article-2': {
    title: 'The Science Behind Cat Vocalizations: Understanding Your Cat\'s Language',
    metaDescription: 'Discover the scientific explanation behind cat sounds and vocalizations. Learn why cats meow, purr, chirp, and how they communicate with humans.',
    keywords: 'cat sounds, cat vocalization, cat meowing, cat purring, cat communication, feline sounds, cat language',
    content: `
      Cat vocalizations are fascinating examples of how domestic cats have evolved to communicate with humans. This article explores the science behind different cat sounds and what they mean.

      The Evolution of Cat Vocalizations:
      Recent research has shown that cats have developed specific vocalizations primarily for communicating with humans, making them unique among domesticated animals. Wild cats rarely meow past kittenhood, but domestic cats have retained and modified this behavior for human interaction.

      1. The Science of Meowing
         • Frequency range: 300-600 Hz (perfect for human hearing)
         • Types of meows:
           - Short meow: Hello or attention-seeking
           - Multiple meows: Excited greeting
           - Mid-pitch meow: Regular requests
           - Low-pitch meow: Complaint or dissatisfaction
           - High-pitch meow: Pain or distress

      2. The Healing Power of Purring
         • Frequency: 25-150 Hz
         • Scientific benefits:
           - Promotes bone density
           - Assists with tissue repair
           - Reduces stress and blood pressure
           - Aids in pain relief
         • When cats purr:
           - Contentment
           - Self-healing
           - Stress relief
           - Social bonding

      3. Understanding Other Cat Sounds
         • Chirping/Trilling:
           - Used by mothers to guide kittens
           - Shows excitement or greeting
           - Frequency range: 100-200 Hz
         
         • Chattering:
           - Hunting instinct response
           - Frustration or excitement
           - Mimicking prey-catching bite

         • Warning Sounds:
           - Hissing: Defensive threat
           - Growling: Serious warning
           - Yowling: Territory or mating-related

      4. How Cats Adapt Their Communication
         • Studies show cats modify their vocalizations based on:
           - Owner's responsiveness
           - Time of day
           - Previous success rates
           - Environmental factors

      The Human-Cat Communication Bond:
      Understanding your cat's vocalizations can significantly improve your relationship. Pay attention to:
      • Context of the sound
      • Body language accompanying the vocalization
      • Time and situation
      • Pattern changes that might indicate health issues

      This knowledge not only enhances your bond with your cat but can also help you identify potential health or behavioral issues early.
    `,
    author: 'Prof. James Martinez',
    authorCredentials: 'Professor of Animal Communication, Feline Research Institute',
    date: '2024-03-14',
    category: 'Cat Communication',
    readingTime: '10 minutes'
  },
  'article-3': {
    title: 'Complete Guide to Cat Nutrition: What Your Cat Really Needs',
    metaDescription: 'Expert guide on cat nutrition, dietary requirements, and feeding practices. Learn about protein needs, hydration, and creating the perfect diet for your cat.',
    keywords: 'cat nutrition, cat diet, cat food, feline nutrition, cat feeding, cat health, pet nutrition',
    content: `
      Proper nutrition is the foundation of your cat's health and longevity. This comprehensive guide covers everything you need to know about feeding your cat for optimal health.

      Essential Nutritional Components:

      1. Protein Requirements
         • Why cats need high protein:
           - Obligate carnivores
           - Unable to synthesize certain amino acids
           - Need animal-based proteins
         • Recommended daily intake:
           - Adult cats: 35-45% protein
           - Kittens: 40-50% protein
           - Senior cats: 35-40% protein

      2. Fats and Essential Fatty Acids
         • Important for:
           - Energy
           - Cell structure
           - Vitamin absorption
         • Key fatty acids:
           - Omega-3
           - Omega-6
           - Arachidonic acid

      3. Hydration and Water Intake
         • Why hydration matters:
           - Kidney health
           - Urinary tract health
           - Overall wellbeing
         • Strategies for proper hydration:
           - Multiple water sources
           - Water fountains
           - Wet food incorporation

      4. Vitamins and Minerals
         • Essential vitamins:
           - Vitamin A
           - Vitamin D
           - B-complex vitamins
         • Critical minerals:
           - Taurine
           - Calcium
           - Phosphorus

      Special Dietary Considerations:

      1. Life Stage Nutrition
         • Kitten needs
         • Adult maintenance
         • Senior cat requirements
         • Pregnant/nursing cats

      2. Health Conditions
         • Diabetes
         • Kidney disease
         • Obesity
         • Food allergies

      Creating the Perfect Feeding Schedule:
      • Portion control
      • Meal timing
      • Food temperature
      • Bowl placement

      Common Nutrition Mistakes to Avoid:
      • Overfeeding
      • Poor quality ingredients
      • Insufficient protein
      • Inadequate water access

      Remember: Always consult with your veterinarian about your specific cat's nutritional needs, as they may vary based on age, health status, and lifestyle.
    `,
    author: 'Dr. Emily Chen',
    authorCredentials: 'DVM, Certified Veterinary Nutritionist',
    date: '2024-03-13',
    category: 'Cat Health & Nutrition',
    readingTime: '12 minutes'
  },
  'article-4': {
    title: 'The Evolution of Cat-Human Relationships: From Ancient Egypt to Modern Day',
    metaDescription: 'Explore the fascinating history of cat-human relationships from ancient civilizations to modern times. Learn how cats evolved from wild animals to beloved pets.',
    keywords: 'cat history, cat human relationship, cat domestication, ancient cats, cat evolution, pet cats, cat culture',
    content: `
      The relationship between cats and humans is one of the most fascinating examples of interspecies bonding in history. This comprehensive exploration traces the evolution of this unique partnership from ancient times to the present day.

      Ancient Civilizations and Cats:

      1. Ancient Egypt (3100 BCE - 30 BCE)
         • Religious significance:
           - Bastet, the cat goddess
           - Mummification of cats
           - Legal protection for cats
         • Practical roles:
           - Grain protection
           - Pest control
           - Royal companions

      2. Asian Influence (500 BCE - present)
         • Japanese culture:
           - Maneki-neko (lucky cat)
           - Temple guardians
         • Chinese significance:
           - Li Shou (cat god)
           - Agricultural protection
           - Silk production protection

      Medieval Period and Cultural Shifts:

      1. European Middle Ages (500-1500 CE)
         • The dark period:
           - Superstitions
           - Witch trials
           - Population decline
         • Monastery cats:
           - Manuscript protection
           - Valued companions

      2. Renaissance Revival (1300-1600 CE)
         • Return to favor:
           - Pest control during plagues
           - Artistic subjects
           - Ship cats

      Modern Evolution:

      1. Victorian Era (1837-1901)
         • Rise of cat fancy:
           - First cat shows
           - Breed development
           - Pet status elevation
         • Cultural impact:
           - Literature
           - Art
           - Fashion

      2. 20th Century Developments
         • Scientific understanding:
           - Behavior studies
           - Health research
           - Nutrition advances
         • Social changes:
           - Indoor cat lifestyle
           - Commercial pet food
           - Veterinary medicine

      3. Digital Age Impact
         • Social media influence:
           - Cat celebrities
           - Meme culture
           - Online communities
         • Modern roles:
           - Emotional support
           - Therapy animals
           - Family members

      The Future of Cat-Human Relationships:
      • Technology integration
      • Environmental considerations
      • Changing human lifestyles
      • Enhanced understanding of cat behavior

      This remarkable journey from wild animal to beloved family member continues to evolve, shaped by cultural changes and advancing scientific understanding.
    `,
    author: 'Dr. Michael Thompson',
    authorCredentials: 'Ph.D. in Anthropology, Specialist in Human-Animal Relations',
    date: '2024-03-12',
    category: 'Cat History & Culture',
    readingTime: '15 minutes'
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation('common');
  
  const article = articles[id];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <button 
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{`${article.title} | Cat Translator Blog`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cat.jellyw.com/blog/${id}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        
        {/* Article specific metadata */}
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "author": {
              "@type": "Person",
              "name": article.author,
              "jobTitle": article.authorCredentials
            },
            "datePublished": article.date,
            "description": article.metaDescription,
            "articleSection": article.category,
            "publisher": {
              "@type": "Organization",
              "name": "Cat Translator",
              "url": "https://cat.jellyw.com"
            }
          })}
        </script>
      </Head>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-gray-600 mb-4">
            <div className="flex items-center gap-4 mb-2">
              <p className="font-medium">{article.author}</p>
              <span>•</span>
              <p>{article.date}</p>
              <span>•</span>
              <p>{article.readingTime}</p>
            </div>
            <p className="text-sm">{article.authorCredentials}</p>
          </div>
          <div className="text-sm text-gray-500">
            Category: <span className="text-blue-600">{article.category}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {t('articles.backToHome')}
          </button>
        </footer>
      </article>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
} 