import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Palette, Type, Layout, FileText, Search, Image as ImageIcon, CheckCircle, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

function ImageGenerator({ prompt, aspectRatio = "16:9" }: { prompt: string, aspectRatio?: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    if (window.aistudio?.hasSelectedApiKey) {
      const has = await window.aistudio.hasSelectedApiKey();
      setHasKey(has);
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  const generateImage = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || process.env.GEMINI_API_KEY || '' });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [
            { text: prompt }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio as any,
            imageSize: "1K"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImageUrl(`data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        setError("No image was generated. Please try again.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found") || err.message?.includes("API key not valid")) {
        setHasKey(false);
        setError("API Key error. Please select your key again. Make sure it has billing enabled.");
      } else {
        setError(err.message || "Failed to generate image");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  if (!hasKey) {
    return (
      <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center">
        <ImageIcon className="text-gray-400 mb-2" size={24} />
        <p className="text-sm text-gray-300 mb-3">To generate this image, you need to select a Google Cloud API key with billing enabled.</p>
        <button
          onClick={handleSelectKey}
          className="bg-primary-black hover:bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Select API Key
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {!imageUrl && !isGenerating && (
        <button
          onClick={generateImage}
          className="bg-primary-red hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2"
        >
          <ImageIcon size={16} />
          Generate Image with AI
        </button>
      )}

      {isGenerating && (
        <div className="p-8 bg-gray-800 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center">
          <Loader2 className="text-primary-red animate-spin mb-2" size={24} />
          <p className="text-sm text-gray-300">Generating high-quality image... This may take a moment.</p>
        </div>
      )}

      {error && (
        <div className="mt-2 p-3 bg-red-900/50 text-red-200 rounded text-sm border border-red-800">
          {error}
        </div>
      )}

      {imageUrl && (
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-700 shadow-sm bg-black">
          <img src={imageUrl} alt="Generated architectural render" className="w-full h-auto" />
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
            <span className="text-xs text-gray-400 font-medium">Generated with Gemini 3.1 Flash Image</span>
            <button
              onClick={generateImage}
              className="text-xs text-primary-red hover:text-orange-400 font-medium"
            >
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Strategy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-primary-black mb-4">Redesign Strategy & Specifications</h1>
          <p className="text-lg text-primary-gray">A comprehensive roadmap to transition Brian's Foundation Repair from a basic lead-gen site to a premium, authority-building digital experience.</p>
        </div>

        {/* 1. Visual Brand Evolution */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-6 flex items-center gap-3">
            <Palette className="text-primary-red" />
            <h2 className="text-2xl font-display font-bold text-primary-black">1. Visual Brand Evolution</h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-primary-black mb-4 flex items-center gap-2"><Palette size={18} /> Color Palette</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#1A2B4C] shadow-inner"></div>
                  <div>
                    <div className="font-bold text-gray-900">Steel Trust Blue</div>
                    <div className="text-sm text-gray-500">Primary • #1A2B4C</div>
                    <div className="text-sm text-gray-600 mt-1">Conveys authority, stability, and engineering precision.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#8A94A6] shadow-inner"></div>
                  <div>
                    <div className="font-bold text-gray-900">Foundation Gray</div>
                    <div className="text-sm text-gray-500">Secondary • #8A94A6</div>
                    <div className="text-sm text-gray-600 mt-1">Represents concrete, structure, and neutrality.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#FF6B35] shadow-inner"></div>
                  <div>
                    <div className="font-bold text-gray-900">Safety Orange</div>
                    <div className="text-sm text-gray-500">Accent • #FF6B35</div>
                    <div className="text-sm text-gray-600 mt-1">Draws the eye to CTAs. Evokes construction and action.</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-black mb-4 flex items-center gap-2"><Type size={18} /> Typography System</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-display font-bold text-3xl text-primary-black mb-2">Montserrat</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Headers & Display</div>
                  <p className="text-gray-600 text-sm">A bold, industrial sans-serif that feels structural and modern. Used for high-impact headlines to establish authority.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-sans text-xl text-gray-800 mb-2">Inter</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Body & UI Elements</div>
                  <p className="text-gray-600 text-sm">Highly legible, clean, and trustworthy. Perfect for detailed explanations of complex foundation issues.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 & 3. Layout & Conversion */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-6 flex items-center gap-3">
            <Layout className="text-primary-red" />
            <h2 className="text-2xl font-display font-bold text-primary-black">2 & 3. Layout & High-Conversion Features</h2>
          </div>
          <div className="p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1"><CheckCircle className="text-green-500" size={20} /></div>
                <div>
                  <strong className="text-primary-black block text-lg">Hero Section (Visual Storytelling)</strong>
                  <p className="text-gray-600 mt-1">Emphasizes the rare specialty of brick home straightening. Uses a dark overlay on a high-res image to make the white/orange typography pop, instantly establishing a premium feel.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><CheckCircle className="text-green-500" size={20} /></div>
                <div>
                  <strong className="text-primary-black block text-lg">Trust Bar</strong>
                  <p className="text-gray-600 mt-1">Placed immediately below the hero. Features BBB A+, 20+ Years Local, and Licensing badges to instantly overcome homeowner anxiety and build credibility.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><CheckCircle className="text-green-500" size={20} /></div>
                <div>
                  <strong className="text-primary-black block text-lg">Smart Diagnosis Micro-interaction</strong>
                  <p className="text-gray-600 mt-1">A 3-step visual quiz (Cracks, Bowing, Sticking Doors). It gamifies the lead-gen process, making it less intimidating than a standard form while pre-qualifying leads for the sales team.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><CheckCircle className="text-green-500" size={20} /></div>
                <div>
                  <strong className="text-primary-black block text-lg">Services Bento Grid</strong>
                  <p className="text-gray-600 mt-1">Organizes complex services into a scannable, high-tech grid. The largest block is dedicated to their unique differentiator (Brick Homes).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><CheckCircle className="text-green-500" size={20} /></div>
                <div>
                  <strong className="text-primary-black block text-lg">Sticky "Instant Quote" CTA</strong>
                  <p className="text-gray-600 mt-1">A floating action button that remains accessible on all devices without interrupting the reading experience.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Content Strategy */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-6 flex items-center gap-3">
            <FileText className="text-primary-red" />
            <h2 className="text-2xl font-display font-bold text-primary-black">4. Content Strategy</h2>
          </div>
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-primary-black mb-3">"About Us" Hook Rewrite</h3>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-red italic text-gray-700">
                "For over two decades, we've been the quiet force holding our community together—literally. What started as a local hometown business in Hurdland has grown into the region's premier structural authority. We don't believe in quick patches or high-pressure sales. We believe in common-sense engineering, honest handshakes, and doing the hard work to ensure your home stands strong for generations. We are your neighbors, and we are your foundation experts."
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary-black mb-3">Authority-Building Blog Titles</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="text-primary-red font-bold text-sm mb-2">RESOURCE</div>
                  <h4 className="font-bold text-gray-900 leading-snug">The Science of Soil: Why Missouri Foundations Shift</h4>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="text-primary-red font-bold text-sm mb-2">CASE STUDY</div>
                  <h4 className="font-bold text-gray-900 leading-snug">Saving History: The Complex Art of Straightening a 100-Year-Old Brick Home</h4>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="text-primary-red font-bold text-sm mb-2">GUIDE</div>
                  <h4 className="font-bold text-gray-900 leading-snug">Cracks vs. Settling: When to Worry and When to Wait</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Technical & SEO */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-6 flex items-center gap-3">
            <Search className="text-primary-red" />
            <h2 className="text-2xl font-display font-bold text-primary-black">5. Technical & SEO Directives</h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary-black mb-4">Local SEO Strategy (Kirksville/Quincy)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Location Pages:</strong> Dedicated service pages for Kirksville, MO and Quincy, IL with localized schema markup.</li>
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Keyword Focus:</strong> "Brick home straightening Kirksville", "Foundation repair Quincy IL", "Retaining wall contractors near me".</li>
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Google Business Profile:</strong> Embed dynamic reviews and map APIs directly into the footer to boost local signals.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-black mb-4">Performance-First Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Next-Gen Formats:</strong> Serve all high-res project imagery in WebP/AVIF formats.</li>
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Lazy Loading:</strong> Implement strict lazy loading for the Before/After sliders and below-the-fold bento grids.</li>
                <li className="flex gap-2"><div className="text-primary-red mt-0.5">•</div> <strong>Edge Caching:</strong> Utilize a CDN (like Vercel or Cloudflare) to ensure fast TTFB (Time to First Byte) for rural users with slower connections.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Image Prompts */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-6 flex items-center gap-3">
            <ImageIcon className="text-primary-red" />
            <h2 className="text-2xl font-display font-bold text-primary-black">6. AI Image Generation Prompts</h2>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-gray-600 mb-6">Use these prompts in Midjourney or Gemini to generate high-end assets for the site:</p>

            <div className="bg-gray-900 text-gray-300 p-6 rounded-xl font-mono text-sm leading-relaxed">
              <span className="text-primary-red font-bold">Prompt 1 (Hero Image):</span><br />
              "High-end architectural photography of a beautiful, historic brick home in the midwest during golden hour. The foundation is perfectly straight and stable. Warm, inviting lighting, professional landscaping, shot on 35mm lens, photorealistic, 8k resolution, architectural digest style --ar 16:9"
              <ImageGenerator prompt="High-end architectural photography of a beautiful, historic brick home in the midwest during golden hour. The foundation is perfectly straight and stable. Warm, inviting lighting, professional landscaping, shot on 35mm lens, photorealistic, 8k resolution, architectural digest style" aspectRatio="16:9" />
            </div>

            <div className="bg-gray-900 text-gray-300 p-6 rounded-xl font-mono text-sm leading-relaxed">
              <span className="text-primary-red font-bold">Prompt 2 (Service Grid - Retaining Wall):</span><br />
              "Close up architectural render of a newly constructed, heavy-duty engineered concrete block retaining wall integrated into a sloped residential yard. Clean lines, showing structural integrity and proper drainage gravel behind it. Bright daylight, hyper-detailed, professional construction photography --ar 4:3"
              <ImageGenerator prompt="Close up architectural render of a newly constructed, heavy-duty engineered concrete block retaining wall integrated into a sloped residential yard. Clean lines, showing structural integrity and proper drainage gravel behind it. Bright daylight, hyper-detailed, professional construction photography" aspectRatio="4:3" />
            </div>

            <div className="bg-gray-900 text-gray-300 p-6 rounded-xl font-mono text-sm leading-relaxed">
              <span className="text-primary-red font-bold">Prompt 3 (Trust/Process):</span><br />
              "A professional construction worker in a clean high-vis vest and hardhat, kneeling to inspect a concrete foundation wall with a digital level tool. Confident, trustworthy expression. Shallow depth of field, blurred residential background, cinematic lighting, highly detailed --ar 16:9"
              <ImageGenerator prompt="A professional construction worker in a clean high-vis vest and hardhat, kneeling to inspect a concrete foundation wall with a digital level tool. Confident, trustworthy expression. Shallow depth of field, blurred residential background, cinematic lighting, highly detailed" aspectRatio="16:9" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
