"use client";

import { useAddProduct } from "@/app/hooks/useAddProduct";

export default function AddProductPage() {
  const {
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
    isSubmitting,
    status,
    statusType,
    handleSubmit,
  } = useAddProduct();

  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-product">
        {/* Kode Product */}
        <div className="container-field-product">
          <label htmlFor="product_name" className="label-field-product">
            ID Produk{""}
          </label>
          <input
            type="text"
            className="field-input-product"
            name="product_name"
            id="product_name"
            value={kodeProduk}
            placeholder="KODE-01"
            onChange={(e) => setKodeProduk(e.target.value)}
            required
          />
        </div>

        {/* Platform */}
        <div className="container-field-product" id="platform">
          <label htmlFor="platform" className="label-field-product">
            Platform
          </label>
          <select
            className="field-input-product"
            name="platform"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          >
            <option value="" disabled>
              -- Pilih Platform --
            </option>
            <option value="shopee">Shopee</option>
            <option value="tokopedia">Tokopedia</option>
            <option value="lazada">Lazada</option>
            <option value="bukalapak">Bukalapak</option>
          </select>
        </div>

        {/* Nama Product */}
        <div className="container-field-product">
          <label htmlFor="product_name" className="label-field-product">
            Nama Produk{""}
          </label>
          <input
            type="text"
            className="field-input-product"
            name="product_name"
            id="product_name"
            value={produkName}
            placeholder="Contoh: Iphone 15 Promax"
            onChange={(e) => setProdukName(e.target.value)}
            required
          />
        </div>

        {/* Url Produk  */}
        <div className="container-field-product" id="product_name">
          <label htmlFor="product_name" className="label-field-product">
            Link Produk
          </label>
          <input
            className="field-input-product"
            type="text"
            placeholder="Contoh: https://tokopedia.com/..."
            name="link_product"
            id="link_product"
            value={linkProduk}
            onChange={(e) => setLinkProduk(e.target.value)}
            required
          />
        </div>

        {/* Price  */}
        <div className="container-field-product" id="price">
          <label htmlFor="price" className="label-field-product">
            Harga
          </label>
          <input
            className="field-input-product"
            type="number"
            name="price"
            id="price"
            placeholder="2000000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Url Image  */}
        <div className="container-field-product" id="image_url">
          <label htmlFor="image_url" className="label-field-product">
            Url Image
          </label>
          <input
            className="field-input-product"
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Contoh: https://url-image/..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button
          className="btn-submit-product"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
        {status && (
          <p className="font-bold" style={{ color: statusType === "error" ? "red" : "green" }}>
            {status}
          </p>
        )}
      </form>
    </>
  );
}
