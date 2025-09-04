"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function ProduitsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Toutes les Catégories" },
    { id: "eclairage", name: "Éclairage" },
    { id: "interieur", name: "Intérieur" },
    { id: "exterieur", name: "Extérieur" },
    { id: "electronique", name: "Électronique" },
    { id: "entretien", name: "Entretien" },
    { id: "tuning", name: "Tuning" }
  ];

  const products = [
    // Éclairage
    {
      id: 1,
      name: "Kit LED H7 6000K",
      category: "eclairage",
      price: "450 MAD",
      description: "Kit phares LED haute performance, éclairage blanc pur 6000K",
      image: "https://placehold.co/300x300?text=Kit+LED+H7+phares+automobile+6000K+blanc",
      badge: "Populaire"
    },
    {
      id: 2,
      name: "Feux de Brouillard LED",
      category: "eclairage",
      price: "320 MAD",
      description: "Feux anti-brouillard LED étanches, installation universelle",
      image: "https://placehold.co/300x300?text=Feux+brouillard+LED+automobile+étanche",
      badge: "Nouveau"
    },
    {
      id: 3,
      name: "Bande LED Intérieur",
      category: "eclairage",
      price: "180 MAD",
      description: "Éclairage d'ambiance intérieur RGB avec télécommande",
      image: "https://placehold.co/300x300?text=Bande+LED+intérieur+auto+RGB+ambiance",
      badge: ""
    },

    // Intérieur
    {
      id: 4,
      name: "Housses de Siège Cuir",
      category: "interieur",
      price: "850 MAD",
      description: "Housses en cuir synthétique haute qualité, ajustement universel",
      image: "https://placehold.co/300x300?text=Housses+siège+cuir+automobile+premium",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Tapis de Sol 3D",
      category: "interieur",
      price: "420 MAD",
      description: "Tapis caoutchouc 3D étanches, protection maximale",
      image: "https://placehold.co/300x300?text=Tapis+sol+3D+caoutchouc+automobile+étanche",
      badge: ""
    },
    {
      id: 6,
      name: "Organisateur Coffre",
      category: "interieur",
      price: "280 MAD",
      description: "Organisateur de coffre pliable, multiple compartiments",
      image: "https://placehold.co/300x300?text=Organisateur+coffre+automobile+pliable",
      badge: ""
    },

    // Extérieur
    {
      id: 7,
      name: "Spoiler Universel",
      category: "exterieur",
      price: "680 MAD",
      description: "Spoiler arrière universel en ABS, style sportif",
      image: "https://placehold.co/300x300?text=Spoiler+arrière+automobile+ABS+sportif",
      badge: "Sport"
    },
    {
      id: 8,
      name: "Enjoliveurs Chrome",
      category: "exterieur",
      price: "350 MAD",
      description: "Set de 4 enjoliveurs chromés 14 pouces, finition brillante",
      image: "https://placehold.co/300x300?text=Enjoliveurs+chrome+14+pouces+automobile",
      badge: ""
    },
    {
      id: 9,
      name: "Pare-Soleil Avant",
      category: "exterieur",
      price: "120 MAD",
      description: "Pare-soleil pliable protection UV, taille universelle",
      image: "https://placehold.co/300x300?text=Pare+soleil+automobile+UV+protection+pliable",
      badge: ""
    },

    // Électronique
    {
      id: 10,
      name: "GPS Android 10\"",
      category: "electronique",
      price: "1250 MAD",
      description: "GPS navigation Android 10 pouces, Bluetooth, WiFi",
      image: "https://placehold.co/300x300?text=GPS+Android+10+pouces+navigation+Bluetooth",
      badge: "High-tech"
    },
    {
      id: 11,
      name: "Caméra de Recul HD",
      category: "electronique",
      price: "380 MAD",
      description: "Caméra de recul HD vision nocturne, étanche IP68",
      image: "https://placehold.co/300x300?text=Caméra+recul+HD+vision+nocturne+IP68",
      badge: ""
    },
    {
      id: 12,
      name: "Chargeur USB Rapide",
      category: "electronique",
      price: "95 MAD",
      description: "Chargeur allume-cigare 3 ports USB charge rapide",
      image: "https://placehold.co/300x300?text=Chargeur+USB+3+ports+allume+cigare+rapide",
      badge: ""
    },

    // Entretien
    {
      id: 13,
      name: "Kit de Lavage Complet",
      category: "entretien",
      price: "320 MAD",
      description: "Kit complet: shampoing, cire, polish, microfibre",
      image: "https://placehold.co/300x300?text=Kit+lavage+automobile+shampoing+cire+polish",
      badge: "Kit"
    },
    {
      id: 14,
      name: "Aspirateur Portable",
      category: "entretien",
      price: "280 MAD",
      description: "Aspirateur 12V haute puissance avec accessoires",
      image: "https://placehold.co/300x300?text=Aspirateur+automobile+12V+portable+accessoires",
      badge: ""
    },
    {
      id: 15,
      name: "Polish Nano Céramique",
      category: "entretien",
      price: "180 MAD",
      description: "Polish protection céramique longue durée",
      image: "https://placehold.co/300x300?text=Polish+nano+céramique+protection+automobile",
      badge: "Pro"
    },

    // Tuning
    {
      id: 16,
      name: "Kit Suspension Sport",
      category: "tuning",
      price: "1580 MAD",
      description: "Kit suspension sport rabaissement -40mm",
      image: "https://placehold.co/300x300?text=Kit+suspension+sport+rabaissement+tuning",
      badge: "Performance"
    },
    {
      id: 17,
      name: "Échappement Sport",
      category: "tuning",
      price: "950 MAD",
      description: "Échappement sport inox, son profond et puissant",
      image: "https://placehold.co/300x300?text=Échappement+sport+inox+automobile+tuning",
      badge: "Sound"
    },
    {
      id: 18,
      name: "Volant Racing",
      category: "tuning",
      price: "420 MAD",
      description: "Volant racing cuir perforé avec moyeu d'adaptation",
      image: "https://placehold.co/300x300?text=Volant+racing+cuir+perforé+moyeu+tuning",
      badge: "Racing"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits Automobiles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre large sélection d'accessoires automobiles de qualité
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-blue-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square w-full overflow-hidden rounded-t-lg relative">
                {product.badge && (
                  <Badge className="absolute top-2 left-2 z-10 bg-blue-600">
                    {product.badge}
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Demander Devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-600 mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              variant="outline"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin de Conseils ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos experts sont là pour vous aider à choisir les meilleurs accessoires 
            pour votre véhicule. Contactez-nous pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/a-propos">À propos de nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}