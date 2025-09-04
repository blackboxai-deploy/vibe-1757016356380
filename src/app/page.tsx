import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const categories = [
    {
      title: "Éclairage Auto",
      description: "LED, phares, feux de brouillard et éclairage intérieur",
      image: "https://placehold.co/400x300?text=Éclairage+LED+automobile+moderne+phares+xenon",
      link: "/produits#eclairage"
    },
    {
      title: "Accessoires Intérieur",
      description: "Housses de siège, tapis de sol, organisateurs",
      image: "https://placehold.co/400x300?text=Accessoires+intérieur+auto+housses+siège+cuir",
      link: "/produits#interieur"
    },
    {
      title: "Accessoires Extérieur",
      description: "Kits carrosserie, spoilers, enjoliveurs chrome",
      image: "https://placehold.co/400x300?text=Accessoires+extérieur+spoiler+kit+carrosserie+chrome",
      link: "/produits#exterieur"
    },
    {
      title: "Électronique",
      description: "GPS, caméras de recul, chargeurs et multimedia",
      image: "https://placehold.co/400x300?text=Électronique+auto+GPS+caméra+recul+multimedia",
      link: "/produits#electronique"
    },
    {
      title: "Entretien",
      description: "Produits de lavage, cires, polish et nettoyants",
      image: "https://placehold.co/400x300?text=Produits+entretien+auto+cire+polish+nettoyant",
      link: "/produits#entretien"
    },
    {
      title: "Tuning",
      description: "Pièces performance, styling et personnalisation",
      image: "https://placehold.co/400x300?text=Tuning+auto+performance+styling+personnalisation",
      link: "/produits#tuning"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Accessoires Automobiles
              <span className="block text-blue-400 text-3xl lg:text-5xl mt-2">EL BAHJA</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Votre spécialiste en équipements automobiles au Maroc
            </p>
            <p className="text-lg mb-10 text-gray-300 max-w-3xl mx-auto">
              Découvrez notre large gamme d'accessoires pour l'intérieur, l'extérieur, 
              l'éclairage et le tuning de votre véhicule. Qualité garantie et service professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link href="/produits">Découvrir nos Produits</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Catégories de Produits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection complète d'accessoires automobiles pour tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <Link href={category.link}>Voir les Produits</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir EL BAHJA ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise Reconnue</h3>
                    <p className="text-gray-600">
                      Plus de 15 ans d'expérience dans l'accessoire automobile au Maroc
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité Garantie</h3>
                    <p className="text-gray-600">
                      Produits sélectionnés avec soin auprès des meilleurs fabricants
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Client</h3>
                    <p className="text-gray-600">
                      Conseils personnalisés et support technique de qualité
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/a-propos">En Savoir Plus</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x500?text=Équipe+professionnelle+atelier+automobile+EL+BAHJA"
                alt="Équipe EL BAHJA - Professionnels de l'automobile"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Équiper Votre Véhicule ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez nos experts pour des conseils personnalisés et découvrez 
            nos solutions adaptées à vos besoins automobiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Demander un Devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/produits">Voir le Catalogue</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}