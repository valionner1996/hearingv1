import React, { useState, useRef } from 'react';
import { OrderFormData } from '../types';
import { CheckCircle, Truck, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

export const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Updated URL from user request
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzshra3rhsD4Q6stO55RnUhGDLoIMkahF1zT9JL72C_4dx4tHASXMEfNA2nrOx6k7nk/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // We DO NOT call e.preventDefault() here.
    // We want the form to submit natively to the iframe.
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    // This runs when the Google Script responds (even if it's just "Success")
    if (isSubmitting) {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', address: '', city: '', zipCode: '', phone: '', email: '' });

      // Track Meta Pixel Purchase Event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Purchase', { 
          value: 159.00, 
          currency: 'PLN',
          content_name: 'AuraSound Pro' 
        });
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-lg mx-auto my-12 shadow-sm animate-in fade-in duration-500">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Dziękujemy za zamówienie!</h3>
        <p className="text-gray-600 mb-6">Twoje zamówienie zostało przyjęte. Skontaktujemy się z Tobą telefonicznie w ciągu 24 godzin w celu potwierdzenia.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Wróć do sklepu
        </button>
      </div>
    );
  }

  return (
    <div id="order-form" className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
      <div className="md:flex">
        {/* Left Side - Value Props */}
        <div className="bg-slate-900 text-white p-8 md:w-5/12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Podsumowanie zamówienia</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <ShieldCheck size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Gwarancja Satysfakcji</h4>
                  <p className="text-slate-400 text-sm">30 dni na zwrot pieniędzy jeśli produkt nie spełni oczekiwań.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Truck size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Darmowa Dostawa</h4>
                  <p className="text-slate-400 text-sm">Kurier InPost lub Poczta Polska. Wysyłka w 24h.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300">AuraSound Pro</span>
              <span className="font-bold text-lg">159,00 zł</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-300">Dostawa</span>
              <span className="font-bold text-green-400">0,00 zł</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Razem</span>
              <span>159,00 zł</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:w-7/12 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dane do wysyłki</h2>

          {/* This hidden iframe catches the response from Google without reloading the page */}
          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            style={{ display: 'none' }} 
            onLoad={handleIframeLoad}
          />

          <form 
            action={GOOGLE_SCRIPT_URL} 
            method="POST" 
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Imię i Nazwisko</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="np. Jan Kowalski"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Ulica i numer domu/mieszkania</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="np. ul. Długa 5/12"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Kod pocztowy</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="00-000"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Miejscowość</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="np. Warszawa"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="np. 500 123 456"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (opcjonalnie)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="jan@example.com"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:bg-blue-400 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Wysyłanie...
                  </>
                ) : (
                  "Zamawiam z obowiązkiem zapłaty"
                )}
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Klikając przycisk, akceptujesz regulamin sklepu. Płatność przy odbiorze.
              </p>
            </div>
          </form>
          
          {/* Overlay to block interaction while submitting */}
          {isSubmitting && (
            <div className="absolute inset-0 bg-white/50 z-10"></div>
          )}
        </div>
      </div>
    </div>
  );
};