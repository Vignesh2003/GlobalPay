import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GlobalPay - The Future of Borderless Crypto Payments",
    short_name: "GlobalPay",
    description: "Send money globally without transaction fees using GlobalPay Coins",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1E88E5",
    icons: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  }
}

