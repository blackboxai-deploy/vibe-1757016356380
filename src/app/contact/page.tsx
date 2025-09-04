"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Adresse",
      content: "123 Avenue Mohammed V\nCasablanca, Maroc\n20000",
      icon: "📍"
    },
    {
      title: "Téléphone",
      content: "+212 522 XXX XXX\n+212 661 XXX XXX",
      icon: "📞"
    },
    {
      title: "Email",
      content: "contact@elbahja-auto.ma\ninfo@elbahja-auto.ma",
      icon: "✉️"
    },
    {
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 18h00\nSam: 8h00 - 16h00\nDim: Fermé",
      icon: "🕒"
    }
  ];

  return (
    <div className="py-8 lg:py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions et vous conseiller 
            dans le choix de vos accessoires automobiles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Demander un Devis ou une Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    Message Envoyé !
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Envoyer un Autre Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom Complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Demandé</Label>
                      <Select onValueChange={(value) => handleSelectChange(value, "service")}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choisir un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="devis">Demande de Devis</SelectItem>
                          <SelectItem value="info">Information Produit</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="sav">Service Après-Vente</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Sujet de votre demande"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires. Nous répondons généralement sous 24h.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6">
                  <CardHeader className="pb-3">
                    <div className="text-3xl mb-2">{info.icon}</div>
                    <CardTitle className="text-lg text-gray-900">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Notre Localisation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://placehold.co/600x350?text=Carte+localisation+EL+BAHJA+Casablanca+Maroc"
                    alt="Localisation EL BAHJA - Casablanca, Maroc"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Informations Importantes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">⏰</span>
                  <div>
                    <p className="font-semibold text-blue-900">Horaires d'Ouverture</p>
                    <p className="text-blue-700 text-sm">
                      Lundi - Vendredi: 8h00 - 18h00<br />
                      Samedi: 8h00 - 16h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">🚗</span>
                  <div>
                    <p className="font-semibold text-blue-900">Parking Gratuit</p>
                    <p className="text-blue-700 text-sm">
                      Stationnement gratuit disponible devant notre magasin
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">🔧</span>
                  <div>
                    <p className="font-semibold text-blue-900">Installation Gratuite</p>
                    <p className="text-blue-700 text-sm">
                      Installation offerte pour certains produits achetés chez nous
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}