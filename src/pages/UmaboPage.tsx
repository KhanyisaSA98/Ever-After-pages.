import React from 'react';
import { Download, Users, Gift, Heart } from 'lucide-react';

const UmaboPage = () => {
  const familyGifts = [
    { item: 'Traditional Blankets', from: 'Mthembu Family', significance: 'Warmth and protection for the new home' },
    { item: 'Cattle (Inkomo)', from: 'Groom\'s Family', significance: 'Symbol of wealth and prosperity' },
    { item: 'Traditional Jewelry', from: 'Bride\'s Aunts', significance: 'Ancestral blessings and beauty' },
    { item: 'Clay Pots', from: 'Maternal Grandmother', significance: 'Fertility and new beginnings' },
  ];

  const familyTree = [
    { name: 'Baba Mthembu', role: 'Paternal Grandfather', lineage: 'Mthembu Clan' },
    { name: 'Gogo Mthembu', role: 'Paternal Grandmother', lineage: 'Mthembu Clan' },
    { name: 'Baba Zulu', role: 'Maternal Grandfather', lineage: 'Zulu Clan' },
    { name: 'Gogo Zulu', role: 'Maternal Grandmother', lineage: 'Zulu Clan' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/8422162/pexels-photo-8422162.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
            Umabo
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif italic opacity-90">
            The Traditional Zulu Wedding Ceremony
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            The Sacred Union
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              The Umabo is the traditional Zulu wedding ceremony, deeply rooted in our culture and 
              signifying the union of two families. This sacred ceremony traditionally follows the 
              negotiation of lobolo, the bride price, and serves to unite the families and 
              communities of the bride and groom.
            </p>
            <p className="mb-6">
              During this ceremony, the bride is formally welcomed into the groom's family and 
              ancestral lineage. The exchange of gifts, traditional attire, and ceremonial rituals 
              all play important roles in blessing the union and ensuring prosperity for the new couple.
            </p>
            <p>
              The Umabo represents not just the joining of two individuals, but the merging of 
              two ancestral lines, creating a bridge between past, present, and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Ceremony Gallery
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Sacred moments from our traditional ceremony
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/8422162/pexels-photo-8422162.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422161/pexels-photo-8422161.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422153/pexels-photo-8422153.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422156/pexels-photo-8422156.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/8422160/pexels-photo-8422160.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((photo, index) => (
              <div key={index} className="card group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${photo})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Altar Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-4">
              Family Altar Layout
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              The sacred arrangement honoring our ancestors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-burgundy-800 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-gold-600" />
                Family Names & Lineage
              </h3>
              
              <div className="space-y-4">
                {familyTree.map((member, index) => (
                  <div key={index} className="bg-cream-50 rounded-lg p-4 border-l-4 border-gold-500">
                    <h4 className="font-semibold text-burgundy-800">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                    <p className="text-gold-600 text-sm font-medium">{member.lineage}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-burgundy-800 mb-6 flex items-center">
                <Gift className="w-6 h-6 mr-3 text-gold-600" />
                Traditional Gifts Exchange
              </h3>
              
              <div className="space-y-4">
                {familyGifts.map((gift, index) => (
                  <div key={index} className="bg-cream-50 rounded-lg p-4 border-l-4 border-burgundy-500">
                    <h4 className="font-semibold text-burgundy-800">{gift.item}</h4>
                    <p className="text-gray-600 text-sm mb-2">From: {gift.from}</p>
                    <p className="text-gray-500 text-sm italic">{gift.significance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-20 bg-burgundy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Cultural Significance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unity</h3>
              <p className="text-sm opacity-90">
                Joining of two families and their ancestral lines
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-sm opacity-90">
                Blessing and support from the entire community
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Heritage</h3>
              <p className="text-sm opacity-90">
                Preserving and honoring our cultural traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-burgundy-800 mb-8">
            Ceremony Details
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Download our complete ceremony guide to learn more about the traditions and customs
          </p>
          
          <button className="btn-primary flex items-center mx-auto">
            <Download className="w-5 h-5 mr-2" />
            Download Ceremony Guide (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default UmaboPage;