const data = [
    {
      id: '01',
      title: 'Choose a Document Type',
      desc: 'Select from NDA, Contract, Privacy Policy, and more'
    },
    {
      id: '02',
      title: 'Answer Simple Questions',
      desc: 'Our AI asks just what it needs to know about your business'
    },
    {
      id: '03',
      title: 'Download or Edit Instantly',
      desc: 'Get your document ready to use or customize further'
    }
  ];
  const container = document.getElementById('cards-container');

  data.forEach(item => {
    const cardHtml = `
      <div class="card p-6 py-10 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#f8442c] duration-300">
                        <div class="flex flex-col gap-4">
                            <span class="text-6xl text-[#5e1a11] font-black">${item.id}</span>
                            <h3 class="text-white font-bold text-xl">${item.title}</h3>
                            <p class="text-[#9e9e9e]">${item.desc}</p>

                        </div>
                    </div>
    `;
    container.innerHTML += cardHtml;
  });


  const documentTypes = [
  {
    title: 'NDA (Mutual)',
    icon: '🤝'
  },
  {
    title: 'NDA (Non-Mutual)',
    icon: '🔐'
  },
  {
    title: 'Privacy Policy',
    icon: '📋'
  },
  {
    title: 'Terms of Service',
    icon: '⚖️'
  },
  {
    title: 'Freelance Contract',
    icon: '💼'
  },
  {
    title: 'Employment Agreement',
    icon: '👥'
  },
  {
    title: 'Consulting Agreement',
    icon: '📞'
  },
  {
    title: 'Service Agreement',
    icon: '📄'
  }
];

const container2 = document.getElementById('cards-container2');
documentTypes.forEach(item => {
    const cardHtml = `
      <div class="card card p-6 py-10 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#f8442c] duration-300">
                        <div class="flex flex-col text-center gap-3">
                            <span class="text-5xl">${item.icon}</span>
                            <p class="font-bold text-white">${item.title}</p>

                        </div>

                    </div>
    `;
    container2.innerHTML += cardHtml;
  });

  
const cardsData = [
  {
    id: 1,
    title: "Attorney-reviewed templates",
    description: "Created by legal experts for accuracy and compliance",
    icon: "⚡"
  },
  {
    id: 2,
    title: "US-business friendly",
    description: "Compliant with US laws and regulations",
    icon: "US"
  },
  {
    id: 3,
    title: "No legal jargon",
    description: "Clear, plain English everyone can understand",
    icon: "📖"
  },
  {
    id: 4,
    title: "Edit & export anytime",
    description: "Customize documents to your specific needs",
    icon: "✏️"
  },
  {
    id: 5,
    title: "Secure & private",
    description: "Your documents are never shared or stored",
    icon: "🔒"
  },
  {
    id: 6,
    title: "Instant generation",
    description: "Get professional documents in under 5 minutes",
    icon: "⚡"
  }
];

const container3 = document.getElementById('cards-container3');
cardsData.forEach(item => {
    const cardHtml = `
      <div class="card p-6 py-10 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#f8442c] duration-300">
                        <div class="flex flex-col gap-4">
                            <span class="text-4xl">${item.icon}</span>
                            <h3 class="text-white font-bold text-xl">${item.title}</h3>
                            <p class="text-[#9e9e9e]">${item.description}</p>

                        </div>
                    </div>
    `;
    container3.innerHTML += cardHtml;
  });


  const securityFeatures = [
  {
    id: 1,
    title: "Security",
    description: "Enterprise-grade encryption protects your data",
    icon: "🔒"
  },
  {
    id: 2,
    title: "Privacy",
    description: "Your documents are never shared or retained",
    icon: "🛡️" 
  },
  {
    id: 3,
    title: "US-Focused",
    description: "Compliant with all US business regulations",
    icon: "US" 
  }
];

const container4 = document.getElementById('cards-container4');
securityFeatures.forEach(item => {
    const cardHtml = `
     <div class="card p-6 py-10 rounded-2xl bg-[#1a0503] border border-[#222] hover:border-[#f8442c] duration-300">
                        <div class="flex flex-col gap-4">
                            <span class="text-4xl">${item.icon}</span>
                            <h3 class="text-white font-bold text-xl">${item.title}</h3>
                            <p class="text-[#9e9e9e]">${item.description}</p>

                        </div>
                    </div>
    `;
    container4.innerHTML += cardHtml;
  });
