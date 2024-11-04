import { createRouter } from "next-connect";
import multer from 'multer';
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = 'gemini-1.5-flash';

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = createRouter();

router.use(upload.single('image'));

// 多语言提示词
const prompts = {
  en: 'You are a skilled cat language translator, able to translate the cat\'s voice through the user\'s uploaded cat pictures. Accurately guess the cat\'s emotions and thoughts through the content of the user\'s uploaded cat pictures. You can guess what the cat wants to say based on the cat\'s body language, expressions, and surrounding environment. After interpreting, please give the cat\'s "voice" according to the cat\'s tone, a bit more natural spoken language, answer in English, the format is as follows: 🐱: [<What the cat thinks>]. In the user\'s uploaded picture, if there is no cat, then return "There is no cat in the picture~"',
  
  zh: '你是一位熟练的猫语翻译师，能够通过用户上传的猫咪图片翻译猫咪的声音。通过图片内容准确猜测猫咪的情绪和想法。你可以根据猫咪的肢体语言、表情和周围环境猜测猫咪想说什么。解读后，请根据猫咪的语气给出猫咪的"声音"，用更自然的口语，用中文回答，格式如下：🐱：[<猫咪的想法>]。如果用户上传的图片中没有猫，则返回"图片中没有猫哦~"',
  
  ja: 'あなたは熟練した猫語翻訳者で、ユーザーがアップロードした猫の写真から猫の声を翻訳することができます。写真の内容から猫の感情や考えを正確に推測してください。猫のボディランゲージ、表情、周囲の環境から、猫が言いたいことを推測できます。解釈後、猫の口調に合わせて猫の"声"を、より自然な話し言葉で、日本語で答えてください。形式は以下の通りです：🐱：[<猫の考え>]。ユーザーがアップロードした画像に猫がいない場合は、"画像に猫がいません〜"と返してください',
  
  ko: '당신은 숙련된 고양이 언어 번역가로, 사용자가 업로드한 고양이 사진을 통해 고양이의 목소리를 번역할 수 있습니다. 사진 내용을 통해 고양이의 감정과 생각을 정확하게 추측하세요. 고양이의 몸짓, 표정, 주변 환경을 바탕으로 고양이가 하고 싶은 말을 추측할 수 있습니다. 해석 후, 고양이의 어조에 맞춰 고양이의 "목소리"를 더 자연스러운 구어체로, 한국어로 답변해 주세요. 형식은 다음과 같습니다: 🐱: [<고양이의 생각>]. 사용자가 업로드한 이미지에 고양이가 없는 경우 "이미지에 고양이가 없네요~"라고 반환하세요',
  
  es: 'Eres un traductor experto del lenguaje felino, capaz de traducir la voz del gato a través de las fotos que sube el usuario. Adivina con precisión las emociones y pensamientos del gato a través del contenido de las fotos. Puedes adivinar lo que el gato quiere decir basándote en su lenguaje corporal, expresiones y entorno. Después de interpretar, por favor da la "voz" del gato según su tono, en un lenguaje hablado más natural, responde en español, el formato es el siguiente: 🐱: [<Lo que piensa el gato>]. Si no hay gato en la imagen subida por el usuario, devuelve "¡No hay gato en la imagen~"'
};

router.post(async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // 从请求头中获取用户选择的语言
    const selectedLocale = req.headers['x-selected-language'] || 'en';
    const prompt = prompts[selectedLocale] || prompts.en;

    const generationConfig = {
      temperature: 1,
      topK: 64,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];

    if (!req.file) {
      console.log('No file uploaded.'); // 添加日志
      res.status(400).json({ error: 'No file uploaded.' });
      return;
    }

    const parts = [
      {
        text: prompt
      },
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: req.file.buffer.toString('base64'),
        },
      },
    ];

    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      generationConfig,
      safetySettings,
    });

    if (!result) {
      console.log('No result from generateContent.'); // 添加日志
    } else {
      console.log('Result from generateContent:', result); // 添加日志
    }

    const responseText = result.response.text();
    res.status(200).json({ result: responseText });
  } catch (error) {
    console.error('Error during request:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } finally {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default router.handler();