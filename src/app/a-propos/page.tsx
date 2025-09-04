import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AProposPage() {
  const values = [
    {
      title: "Qualité",
      description: "Nous sélectionnons uniquement les meilleures marques et produits pour garantir la satisfaction de nos clients.",
      icon: "🏆"
    },
    {
      title: "Innovation",
      description: "Toujours à la pointe des dernières technologies automobiles pour offrir les solutions les plus modernes.",
      icon: "💡"
    },
    {
      title: "Service",
      description: "Un service client personnalisé avec des conseils d'experts pour chaque besoin spécifique.",
      icon: "🤝"
    },
    {
      title: "Confiance",
      description: "Plus de 15 ans d'expérience et des milliers de clients satisfaits nous font confiance.",
      icon: "✅"
    }
  ];

  const team = [
    {
      name: "Ahmed EL BAHJA",
      role: "Directeur Général",
      description: "Passionné d'automobile depuis 20 ans, expert en accessoires et tuning.",
      image: "https://placehold.co/300x400?text=Ahmed+EL+BAHJA+directeur+général+expert+automobile"
    },
    {
      name: "Youssef BENNANI",
      role: "Responsable Technique",
      description: "Spécialiste en électronique automobile et systèmes d'éclairage.",
      image: "https://placehold.co/300x400?text=Youssef+BENNANI+responsable+technique+électronique+auto"
    },
    {
      name: "Fatima ZAHIRI",
      role: "Conseillère Client",
      description: "Experte en accessoires intérieur et conseil personnalisé.",
      image: "https://placehold.co/300x400?text=Fatima+ZAHIRI+conseillère+client+accessoires+intérieur"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            À Propos d'EL BAHJA
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins en accessoires automobiles depuis 2009
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Fondée en 2009 par Ahmed EL BAHJA, passionné d'automobile, 
                  notre entreprise a débuté comme un petit atelier spécialisé 
                  dans l'installation d'accessoires automobiles à Casablanca.
                </p>
                <p>
                  Au fil des années, grâce à notre expertise et notre engagement 
                  envers la qualité, nous avons élargi notre gamme de produits 
                  et développé notre réseau de partenaires pour devenir une 
                  référence dans le domaine des accessoires automobiles au Maroc.
                </p>
                <p>
                  Aujourd'hui, EL BAHJA c'est plus de 15 ans d'expérience, 
                  une équipe de professionnels passionnés, et des milliers 
                  de clients satisfaits qui nous font confiance pour 
                  l'équipement et la personnalisation de leurs véhicules.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x500?text=Atelier+EL+BAHJA+équipe+professionnelle+accessoires+auto"
                alt="Atelier EL BAHJA - Histoire de l'entreprise"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600 mb-4">Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg text-center leading-relaxed">
                  Fournir à nos clients les meilleurs accessoires automobiles 
                  du marché, accompagnés de conseils d'experts et d'un service 
                  de qualité, pour améliorer le confort, la sécurité et 
                  l'esthétique de leurs véhicules.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600 mb-4">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg text-center leading-relaxed">
                  Devenir le leader incontournable des accessoires automobiles 
                  au Maroc en continuant d'innover et d'offrir des solutions 
                  adaptées aux besoins évolutifs des automobilistes modernes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés à votre service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <div className="aspect-4/5 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {member.name}
                  </CardTitle>
                  <p className="text-blue-600 font-semibold">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-200">Années d'Expérience</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5000+</div>
              <p className="text-blue-200">Clients Satisfaits</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-200">Produits Disponibles</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <p className="text-blue-200">Taux de Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Rejoignez Notre Famille de Clients Satisfaits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez pourquoi des milliers d'automobilistes nous font confiance 
            pour équiper et personnaliser leurs véhicules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link href="/produits">Découvrir nos Produits</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3">
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}