const mockImages = [
  {
    name: "51119.jpg",
    key: "45261d9d-e28a-4f01-874b-d19f94fdf879-u1fct.jpg",
    customId: null,
    url: "https://utfs.io/f/45261d9d-e28a-4f01-874b-d19f94fdf879-u1fct.jpg",
    size: 727993,
    uploadedAt: "2024-09-09T17:31:22.000Z",
  },
  {
    name: "J6m3oF8.jpg",
    key: "e9e3f0a5-efe1-4a13-91d1-9ec8dc6c8a1a-n33ss1.jpg",
    customId: null,
    url: "https://utfs.io/f/e9e3f0a5-efe1-4a13-91d1-9ec8dc6c8a1a-n33ss1.jpg",
    size: 373424,
    uploadedAt: "2024-09-09T17:31:22.000Z",
  },
  {
    name: "284553.jpg",
    key: "9e2108a4-e253-44d5-9942-66796d809362-ojzwv9.jpg",
    customId: null,
    url: "https://utfs.io/f/9e2108a4-e253-44d5-9942-66796d809362-ojzwv9.jpg",
    size: 422858,
    uploadedAt: "2024-09-09T17:31:22.000Z",
  },
  {
    name: "284466.jpg",
    key: "40f133c7-67c5-452c-81bf-a96a2f04fd57-ojzw5i.jpg",
    customId: null,
    url: "https://utfs.io/f/40f133c7-67c5-452c-81bf-a96a2f04fd57-ojzw5i.jpg",
    size: 371224,
    uploadedAt: "2024-09-09T17:31:22.000Z",
  },
];

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.key} className="w-48">
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
{}