import React from 'react';
import { Ear, Check, Battery, Volume2 } from 'lucide-react';
import { OrderForm } from './components/OrderForm';
import { AiAssistant } from './components/AiAssistant';

function App() {
  const scrollToOrder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation - Centered Logo, No Links */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Ear className="text-white h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">AuraSound</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Nowoczesna Technologia 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Odkryj radość słyszenia <span className="text-blue-600">na nowo</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Dyskretny, komfortowy i krystalicznie czysty dźwięk. AuraSound Pro to aparat słuchowy zaprojektowany specjalnie dla seniorów, którzy chcą cieszyć się każdą chwilą.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#order-form" 
                  onClick={scrollToOrder}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold text-center transition-all hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                >
                  Zamów z rabatem -50%
                </a>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm py-4">
                  <Check className="text-green-500" size={16} /> 30 dni na zwrot
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl"></div>
              {/* Product Image Representation - Hand holding hearing aid/case style */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden h-[400px] md:h-[500px]">
                <img 
                  src="https://m.media-amazon.com/images/I/71dxb33HTbL._AC_SL1500_.jpg" 
                  alt="AuraSound Hearing Aid in Hand" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Battery className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Czas pracy</p>
                      <p className="font-bold text-slate-900">Do 48 godzin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dlaczego AuraSound Pro?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Łączymy zaawansowaną medycynę z prostotą użytkowania, tworząc produkt idealny do codziennego funkcjonowania.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Volume2 className="w-8 h-8 text-blue-600" />}
              title="Redukcja Szumów"
              description="Zaawansowany chip cyfrowy eliminuje szumy tła, pozwalając skupić się na rozmowie nawet w głośnym otoczeniu."
            />
            <FeatureCard 
              icon={<Ear className="w-8 h-8 text-blue-600" />}
              title="Dyskretny Design"
              description="Beżowy kolor i ergonomiczny kształt zauszny sprawiają, że aparat jest prawie niewidoczny i wygodny w noszeniu."
            />
             <FeatureCard 
              icon={<Battery className="w-8 h-8 text-blue-600" />}
              title="Długa Żywotność"
              description="Zoptymalizowane zużycie energii zapewnia cały dzień słuchania bez konieczności wymiany baterii."
            />
          </div>
        </div>
      </section>

      {/* Product Highlight - Behind the ear style */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                   <img 
                      src="https://m.media-amazon.com/images/I/611OseeBy+L._AC_SL1500_.jpg" 
                      alt="Senior using hearing aid" 
                      className="rounded-2xl shadow-lg w-full bg-white"
                   />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-6">Prostota, którą pokochasz</h3>
                    <ul className="space-y-4">
                        {[
                            "Regulacja głośności jednym pokrętłem",
                            "Pasuje do lewego i prawego ucha",
                            "W zestawie 3 rozmiary wkładek silikonowych",
                            "Etui podróżne gratis"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="bg-green-100 p-1 rounded-full">
                                    <Check size={16} className="text-green-600" />
                                </div>
                                <span className="text-lg text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zamów swój aparat słuchowy dzisiaj</h2>
            <p className="text-blue-100 text-lg">Wypełnij formularz poniżej. Płatność bezpiecznie przy odbiorze.</p>
          </div>
          
          <OrderForm />

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Ear className="text-blue-500 h-6 w-6" />
                <span className="text-xl font-bold text-white">AuraSound</span>
              </div>
              <p className="text-sm max-w-sm">
                Naszą misją jest przywracanie jakości życia poprzez doskonały słuch. Jesteśmy liderem w dziedzinie przystępnych cenowo rozwiązań audiologicznych.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>infolinia: 800 123 456</li>
                <li>email: kontakt@aurasound.pl</li>
                <li>ul. Medyczna 14, Warszawa</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Informacje</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Regulamin</a></li>
                <li><a href="#" className="hover:text-blue-400">Polityka Prywatności</a></li>
                <li><a href="#" className="hover:text-blue-400">Zwroty i Reklamacje</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            © 2026 AuraSound Polska. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AiAssistant />
    </div>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
    <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default App;