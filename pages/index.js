import Head from 'next/head';
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function SpeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  )
}

export default function Home() {
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      setLoading(false);
      return;
    }
    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };


  return (
    <div className="container">
      <Head>
        <title>What is the cat thinking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">What is the cat thinking</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
          Upload an image of a cat and we'll tell you what it might be thinking.
        </p>

        <div className="w-full max-w-md px-2 py-2">
          <form onSubmit={submitForm} encType="multipart/form-data">
            <div className="grid w-full gap-2">
              <Label htmlFor="catImage">Upload Cat Image</Label>
              <Input id="catImage" name="image" type="file" onChange={previewImage} />
              <Button type="submit" disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
          </form>
        </div>

        <Card className="max-w-md mt-8">
          <CardHeader>
            <div className="flex items-center">
              <CatIcon className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">Analyzed Image</h2>
            </div>
          </CardHeader>
          <CardContent>
            {imagePreview && <img alt="Analyzed cat image" className="aspect-content object-cover" height="500" src={imagePreview} width="500" />}
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <SpeakerIcon className="w-6 h-6" />
              <p className="ml-2 text-lg">{result || "🐱🐱🐱🐱🐱"}</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
