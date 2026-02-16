import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// OG Image dimensions
const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Eren Vural";

  // Person info from content.tsx
  const person = {
    name: "Eren Vural",
    role: "Cost Planning and Analysis Executive",
    avatar: `${new URL(request.url).origin}/images/pp-eren-bussiness.jpg`,
  };

  // Fetch avatar image and convert to base64 data URL for reliable rendering
  let avatarSrc = person.avatar;
  try {
    const avatarResponse = await fetch(person.avatar);
    if (avatarResponse.ok) {
      const arrayBuffer = await avatarResponse.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      const contentType = avatarResponse.headers.get("content-type") || "image/jpeg";
      avatarSrc = `data:${contentType};base64,${base64}`;
    }
  } catch (e) {
    // Fallback to URL-based src if fetch fails
    console.error("Failed to fetch avatar for OG image:", e);
  }

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0d4f5c 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative dots pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0, 188, 212, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          zIndex: 1,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            display: "flex",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid rgba(0, 188, 212, 0.6)",
            boxShadow: "0 0 40px rgba(0, 188, 212, 0.3)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt={person.name}
            width={160}
            height={160}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            textAlign: "center",
          }}
        >
          {title}
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "rgba(0, 188, 212, 0.9)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {person.role}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "200px",
          height: "4px",
          background:
            "linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.8), transparent)",
          borderRadius: "2px",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
