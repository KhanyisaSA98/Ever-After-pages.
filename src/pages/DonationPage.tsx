import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Check } from 'lucide-react';

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('card');

  const donationAmounts = [
    { amount: 500, label: 'Symbolic Contribution', description: 'A meaningful gesture of support' },
    { amount: 1000, label: 'Traditional Blessing', description: 'Support for ceremony preparations' },
    { amount: 2500, label: 'Family Contribution', description: 'Significant support for our future' },
    { amount: 5000, label: 'Elder\'s Blessing', description: 'Generous contribution for prosperity' },
  ];

  const totalContributions = 45000; // Example total
  const goalAmount = 100000;
  const progressPercentage = (totalContributions / goalAmount) * 100;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-shadow">
            Gift a Cow
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl font-serif italic opacity-90">
            Supporting Our Future Together
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            Traditional Cattle Registry
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              In many African traditions, gifting cattle symbolizes respect and honor, carrying deep 
              cultural significance. Your contribution helps us honor this cherished custom and 
              supports our journey as we build our life together.
            </p>
            <p className="mb-6">
              Each gift represents not just financial support, but a blessing for prosperity, 
              fertility, and abundance in our new marriage. Your generosity will help us establish 
              our home and contribute to important cultural ceremonies.
            </p>
            <p>
              Whether large or small, every contribution is deeply appreciated and will be 
              remembered as part of our wedding story.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-burgundy-800 text-center mb-8">
            Total Contributions
          </h3>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-700">Progress</span>
              <span className="text-lg font-semibold text-burgundy-800">
                R{totalContributions.toLocaleString()} / R{goalAmount.toLocaleString()}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className="bg-gradient-to-r from-burgundy-600 to-burgundy-800 h-4 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
            
            <p className="text-center text-gray-600">
              {Math.round(progressPercentage)}% of our goal reached • {Math.floor((goalAmount - totalContributions) / 1000)} contributors so far
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-display font-bold text-burgundy-800 text-center mb-12">
            Choose Your Contribution
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {donationAmounts.map((donation) => (
              <button
                key={donation.amount}
                onClick={() => {
                  setSelectedAmount(donation.amount);
                  setCustomAmount('');
                }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedAmount === donation.amount
                    ? 'border-burgundy-500 bg-burgundy-50'
                    : 'border-gray-200 hover:border-burgundy-300 hover:bg-burgundy-50'
                }`}
              >
                <div className="text-2xl font-bold text-burgundy-800 mb-2">
                  R{donation.amount}
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {donation.label}
                </div>
                <div className="text-xs text-gray-500">
                  {donation.description}
                </div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter a custom amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Gift Message */}
          <div className="max-w-2xl mx-auto mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gift message (optional)
            </label>
            <textarea
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              placeholder="Share a special message with the couple..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Payment Method */}
          <div className="max-w-md mx-auto mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h4>
            <div className="space-y-3">
              <button
                onClick={() => setSelectedPayment('card')}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center ${
                  selectedPayment === 'card'
                    ? 'border-burgundy-500 bg-burgundy-50'
                    : 'border-gray-200 hover:border-burgundy-300'
                }`}
              >
                <CreditCard className="w-5 h-5 mr-3 text-burgundy-600" />
                <span className="font-medium text-gray-700">Credit/Debit Card</span>
                {selectedPayment === 'card' && (
                  <Check className="w-5 h-5 ml-auto text-burgundy-600" />
                )}
              </button>
              
              <button
                onClick={() => setSelectedPayment('mobile')}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center ${
                  selectedPayment === 'mobile'
                    ? 'border-burgundy-500 bg-burgundy-50'
                    : 'border-gray-200 hover:border-burgundy-300'
                }`}
              >
                <Smartphone className="w-5 h-5 mr-3 text-burgundy-600" />
                <span className="font-medium text-gray-700">Mobile Payment</span>
                {selectedPayment === 'mobile' && (
                  <Check className="w-5 h-5 ml-auto text-burgundy-600" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              disabled={!selectedAmount && !customAmount}
              className={`btn-primary px-12 py-4 text-lg ${
                (!selectedAmount && !customAmount) 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105'
              }`}
            >
              <Heart className="w-5 h-5 mr-2 inline" />
              Send Gift
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Secure payment processing • Your information is protected
            </p>
          </div>
        </div>
      </section>

      {/* Payment Icons */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-6">We accept</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">VISA</div>
            <div className="text-2xl font-bold">MasterCard</div>
            <div className="text-2xl font-bold">PayFast</div>
            <div className="text-2xl font-bold">Yoco</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;