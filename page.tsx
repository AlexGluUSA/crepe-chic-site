import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 p-4 font-sans">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-pink-600">Crêpe Chic</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          A taste of Paris on the Florida coast – fresh crêpes, artisan coffee,
          and all-day breakfast, served with style.
        </p>
        <div className="mt-6">
          <Button className="text-white bg-pink-500 hover:bg-pink-600">
            Order Online
          </Button>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Savory Crêpes</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Chicken & Mushroom</li>
              <li>Brisket BBQ</li>
              <li>Egg & Bacon</li>
              <li>Omelet with Sausages</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Sweet Crêpes</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Mixed Berries & Banana</li>
              <li>Strawberry Dream</li>
              <li>Apple Delight</li>
              <li>Apricot Jam & Cream</li>
              <li>Chocolate Heaven</li>
              <li>Sweetened Condensed Milk</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Other Treats</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Fruit Salad</li>
              <li>Vanilla & Pistachio Ice Cream</li>
              <li>Artisan Coffee</li>
              <li>Cold Drinks</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p className="text-sm mb-2">
              📍 129 N Federal Hwy, Dania Beach, FL (within 2-mile radius south)
            </p>
            <a
              href="https://maps.google.com/?q=129+N+Federal+Hwy+Dania+Beach+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline text-sm"
            >
              Get Directions
            </a>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-10 mt-10 shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">
            Customer Love 💖
          </h3>
          <blockquote className="italic text-sm text-gray-600">
            “Absolutely delicious crêpes, great service, and the Parisian vibes
            are perfect. Will come again!” – ✨
          </blockquote>
        </div>
      </section>
    </main>
  );
}