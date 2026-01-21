import { useRef, useState } from "react";

export function useAddLaptop() {
  // PLATFORM
  const [platform, setPlatform] = useState("");

  // PLATFORM
  const [kodeProduk, setKodeProduk] = useState("");

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
      const trimmedKodeProduk = kodeProduk.trim();
      const trimmedProdukName = produkName.trim();
      const trimmedLinkProduct = linkProduk.trim();
      const trimmedPrice = price.trim();
      const trimmedImageUrl = imageUrl.trim();

      // ✅ optional tapi bagus: idempotency key (buat server dedupe)
      const clientMessageId = crypto.randomUUID();

      const res = await fetch("api/dashboard/laptop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: trimmedPlatform,
          kodeProduk: trimmedKodeProduk,
          produkName: trimmedProdukName,
          linkProduk: trimmedLinkProduct,
          price: trimmedPrice,
          imageUrl: trimmedImageUrl,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatusType("error");

        if (res.status === 409) {
          // kodeProduk sudah ada
          setStatus(data.message || "Kode produk sudah ada");
        } else {
          setStatus(data.message || "Terjadi kesalahan");
        }

        return;
      }

      setStatusType("success");
      setStatus(`Produk berhasl di tambahkan, dengan kode produk: ${data.kodeProduk}`);
      setPlatform("");
      setKodeProduk("");
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
    kodeProduk,
    setKodeProduk,
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
