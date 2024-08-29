import db from "@/lib/db";

export const getTotalPrice = async (storeId: string) => {
  const totalPrice = await db.product.aggregate({
    _sum: {
      price: true,
    },
    where: {
      storeId,
    },
  });

  return totalPrice._sum.price || 0; // Jika tidak ada produk, kembalikan 0
};
