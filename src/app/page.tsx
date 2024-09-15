import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/k1KbTlgKILj9ZhXLfbpT5r4oNeHjsV3cYRGaw1dStlDP6kg9",
    "https://utfs.io/f/k1KbTlgKILj9TwAIJlPgGVeyCpFbXxnjD6OBQwz8qa7ZH0It",
    "https://utfs.io/f/k1KbTlgKILj9aBYjXQOhBXU0NTSv13t6cAaHsm9qEQk5goDx"
]

const mockImages = mockUrls.map((url, index) => ({
    url,
    id: index + 1,
}));

export default function HomePage() {
    return (
        <main className="" >
            <div className="flex flex-wrap gap-4">
                {[...mockImages, ...mockImages, ...mockImages].map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} alt={`${image.id}`} width={300} height={300} />
                    </div>
                ))}
            </div>
        </main>
    );
}
