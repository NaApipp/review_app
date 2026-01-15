"use client";

import { useEffect, useState } from "react";

type Product = {
    _id: string;
    productId: number;
    platform: string;
    produkName: string;
    linkProduk: string;
    price: number;
    createdAt: string;
}

export default function ListProduct() {
    const [items, setItems] = useState<Product[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);

  async function loadMore(isFirst = false) {
    if (loading) return;
    setLoading(true);

    const params = new URLSearchParams({ limit: "9" });
    if (!isFirst && cursor) params.set("cursor", cursor);

    const res = await fetch(`/api/dashboard/product?${params.toString()}`, { cache: "no-store" });
    const json = await res.json();

    setItems((prev) => (isFirst ? json.data : [...prev, ...json.data]));
    setCursor(json.nextCursor);
    setHasNext(json.hasNext);
    setLoading(false);
  }

  useEffect(() => {
    loadMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <>
        <div className="flex flex-wrap m-2 justify-center gap-2">
        {items.map((m) => (
          <div key={m._id} className="bg-red-400 p-4 mb-4 rounded-md border border-red-200">
            <p>Id Produk: <span className="data-list-product">{m.productId}</span></p>
            <p>Platform: <span className="data-list-product">{m.platform}</span></p>
            <p>Nama Produk: <span className="data-list-product">{m.produkName}</span></p>
            <p>Link Produk: <span className="data-list-product">{m.linkProduk}</span></p>
            <p>Harga: <span className="data-list-product">{m.price}</span></p>
            <p>Waktu Dibuat: <span className="data-list-product">{m.createdAt}</span></p>
          </div>
        ))}
        </div>
        </>
    )
}