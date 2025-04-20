import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function JowarExpress() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-orange-100 text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white p-10 text-center">
        <img
          src="/logo-jowar-express.png"
          alt="Jowar Express Logo"
          className="mx-auto mb-4 w-24 h-24 object-contain"
        />
        <h1 className="text-4xl font-bold mb-2">Jowar Express</h1>
        <p className="text-xl">Nature's Bounty, Naturally Delicious</p>
        <Button className="mt-4 text-orange-500 bg-white hover:bg-gray-100">
          Order Now
        </Button>
      </section>

      {/* About Us */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          At our Jowar Express kitchen, we celebrate the wholesome goodness of
          Jowar Roti — a nutritious and flavorful flatbread made from jowar
          (sorghum) flour, widely cherished as one of the healthiest traditional
          Indian breads. What sets us apart is our artful pairing of these soft,
          gluten-free rotis with a wide variety of authentic Indian curries,
          creating a soulful dining experience that delights your palate with
          every bite.
        </p>
      </section>

      {/* Menu Preview */}
      <section className="bg-white p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Menu Highlights</h2>
        <ul className="list-disc pl-6">
          <li>Jowar Rotis</li>
          <li>Telangana Style Chicken Curry</li>
          <li>Bhendakaya Fry</li>
          <li>Kakarkaya Fry</li>
          <li>Boti Curry</li>
          <li>Bheja Fry</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-orange-50 p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <Card className="mb-4">
          <CardContent className="p-4">
            <p>
              "Absolutely delicious! The Jowar Rotis are soft and pair perfectly
              with the curries."
            </p>
            <p className="mt-2 text-sm text-gray-500">– Ramesh, Ameenpur</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p>
              "Authentic taste, healthy meals, and quick delivery! Highly
              recommended."
            </p>
            <p className="mt-2 text-sm text-gray-500">– Sneha, Miyapur</p>
          </CardContent>
        </Card>
      </section>

      {/* Offers & Discounts */}
      <section className="bg-orange-200 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Special Offers</h2>
        <p>Get 10% off your first order via Swiggy or Zomato!</p>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Stay updated with our latest offers and new dishes!</p>
        <div className="flex justify-center gap-2">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64"
          />
          <Button className="bg-orange-500 text-white">Subscribe</Button>
        </div>
      </section>

      {/* Contact Info */}
      <footer className="bg-orange-500 text-white text-center p-4 mt-6">
        <p>📍 Ameenpur | ⏰ 11 AM – 11 PM | 📞 6300530767</p>
        <p className="text-sm">Swiggy • Zomato • Own Delivery</p>
      </footer>
    </div>
  );
}
