import prisma from "../../src/libs/db-client";
import { faker } from "@faker-js/faker";
const categories = [
  "Thế giới",
  "Kinh doanh",
  "Thể thao",
  "Giải trí",
  "Công nghệ",
  "Sức khỏe",
  "Giáo dục",
  "Pháp luật",
  "Du lịch",
  "Ẩm thực",
  "Văn hóa",
  "Khoa học",
  "Môi trường",
  "Chính trị",
  "Tài chính",
  "Thời tiết",
  "Ô tô - Xe máy",
  "Đời sống",
  "Xã hội",
  "Bất động sản",
];

export default async function categorySeed() {
  categories.map(async (category) => {
    await prisma.category.create({
      data: {
        name: category,
      },
    });
  });
}
