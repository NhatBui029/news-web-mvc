import { createPost } from "./../../src/services/post";
import { getCategories } from "./../../src/services/category";
import { faker } from "@faker-js/faker";
export default async function postSeed() {
  const categories = await getCategories();
  categories.forEach(async (category) => {
    for (let i = 0; i < 1; i++) {
      await createPost({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(3),
        description: faker.lorem.sentences(2),
        keywords: faker.lorem.words(5),
        imageUrl: faker.image.url(),
        published: faker.datatype.boolean(),
        author: faker.person.fullName(),
        view: faker.number.int({ min: 10, max: 100 }),
        categoryId: category.id,
      });
    }
  });
}
