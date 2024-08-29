import db from "@/lib/db";

export const getCategoryCount = async (storeId: string) => {
  const categoryCount = await db.category.count({
    where: {
      storeId,
    },
  });

  return categoryCount;
};
