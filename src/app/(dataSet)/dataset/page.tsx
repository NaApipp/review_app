"use client";

import Link from "next/link";
import { Laptop, Shirt, Smartphone, ArrowRight } from "lucide-react";

const datasets = [
  {
    href: "/dataset/data-handphone",
    label: "Data Handphone",
    description: "Dataset untuk produk handphone",
    icon: Smartphone,
  },
  {
    href: "/dataset/data-laptop",
    label: "Data Laptop",
    description: "Dataset untuk produk laptop",
    icon: Laptop,
  },
  {
    href: "/dataset/data-fashion",
    label: "Data Fashion",
    description: "Dataset untuk produk fashion",
    icon: Shirt,
  },
];

export default function DatasetPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #0f2540 0%, #1A3D64 50%, #1e4a7a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
        color: "#F4F4F4",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Glow top-left */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(54,101,155,0.4) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Glow bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(48,80,115,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(244,244,244,0.45)",
              marginBottom: "0.6rem",
            }}
          >
            — Data Repository —
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#F4F4F4",
            }}
          >
            Dataset View
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              color: "rgba(244,244,244,0.5)",
              lineHeight: 1.6,
            }}
          >
            Pilih kategori untuk menjelajahi data review produk
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {datasets.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  flex: "1 1 220px",
                  maxWidth: "260px",
                  background: "rgba(38,71,108,0.6)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(54,101,155,0.45)",
                  borderRadius: "20px",
                  padding: "2rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  color: "#F4F4F4",
                  cursor: "pointer",
                  transition:
                    "transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease, border-color 0.28s ease",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-8px) scale(1.02)";
                  el.style.boxShadow =
                    "0 20px 50px rgba(26,61,100,0.7), 0 0 0 1px rgba(54,101,155,0.6)";
                  el.style.borderColor = "rgba(54,101,155,0.8)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(54,101,155,0.45)";
                }}
              >
                {/* Shimmer line top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(244,244,244,0.25), transparent)",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #305073, #26476C)",
                    border: "1px solid rgba(54,101,155,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <Icon size={26} strokeWidth={1.5} color="#F4F4F4" />
                </div>

                {/* Text */}
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      margin: "0 0 0.3rem",
                      color: "#F4F4F4",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(244,244,244,0.5)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgba(244,244,244,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    marginTop: "0.25rem",
                  }}
                >
                  <ArrowRight size={15} color="rgba(244,244,244,0.6)" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
