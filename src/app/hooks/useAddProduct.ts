import { useRef, useState } from "react";

export function useAddProduct() {
  // PLATFORM
  const [platform, setPlatform] = useState("");

  //   NAME
  const [produkName, setProdukName] = useState("");

  //   URL
  const [linkProduk, setLinkProduk] = useState("");

  //   Price
  const [price, setPrice] = useState("");

  //   URL
  const [imageUrl, setImageUrl] = useState("");

  // STATUS MESSAGE
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  // ✅ tambahan: state + ref untuk anti double submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ guard paling penting: cegah submit kedua saat submit pertama jalan
    if (submittingRef.current) return;

    submittingRef.current = true;
    setIsSubmitting(true);

    setStatus(null);
    setStatusType("");

    try {
      const trimmedPlatform = platform.trim();
      const trimmedProdukName = produkName.trim();
      const trimmedLinkProduct = linkProduk.trim();
      const trimmedPrice = price.trim();
      const trimmedImageUrl = imageUrl.trim();

      // ✅ optional tapi bagus: idempotency key (buat server dedupe)
      const clientMessageId = crypto.randomUUID();

      const res = await fetch("api/dashboard/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: trimmedPlatform,
          produkName: trimmedProdukName,
          linkProduk: trimmedLinkProduct,
          price: trimmedPrice,
          imageUrl: trimmedImageUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType("error");
        setStatus(data.error || "Terjadi kesalahan");
        return;
      }

      setStatusType("success");
      setStatus(`Schedule berhasil ditambahkan dengan ID: ${data.id}`);
      setPlatform("");
      setProdukName("");
      setLinkProduk("");
      setPrice("");
      setImageUrl("");
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatus("Gagal mengirim pesan");
    } finally {
      // ✅ lock dilepas pasti, bahkan kalau return di tengah
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return {
    platform,
    setPlatform,
    produkName,
    setProdukName,
    linkProduk,
    setLinkProduk,
    price,
    setPrice,
    imageUrl,
    setImageUrl,
    status,
    statusType,
    isSubmitting, // ✅ expose untuk disable button
    handleSubmit,
  };
}
