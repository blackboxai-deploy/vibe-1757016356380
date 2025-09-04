import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <div className="text-lg font-bold">ELB</div>
              </div>
              <div>
                <h3 className="font-bold text-lg">EL BAHJA</h3>
                <p className="text-blue-400 text-sm">Accessoires Automobiles</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Votre spécialiste en accessoires automobiles depuis des années. 
              Qualité, innovation et service client au cœur de notre mission.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  À Propos de Nous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Catégories</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Éclairage Auto</li>
              <li>Accessoires Intérieur</li>
              <li>Accessoires Extérieur</li>
              <li>Électronique</li>
              <li>Entretien</li>
              <li>Tuning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-blue-400">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm">123 Avenue Mohammed V<br />Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-sm">+212 522 XXX XXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">contact@elbahja-auto.ma</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Accessoires Automobiles EL BAHJA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <span>Politique de Confidentialité</span>
              <span>Conditions d'Utilisation</span>
              <span>Support Client</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}