//const sample = require('/data.json');

let data = {
  'arxiv-QML': {
    image: 'Paper_QML.png',
    size: '100px',
    'base-rate': 12,
    unit: 'month',
    description:
      'How many papers that mention "quantum machine learning" get published per month?',
    annual: {
      2018: {
        amount: 46,
        stack: '1',
        description: ''
      },
      2019: {
        amount: 30,
        stack: '1',
        description: ''
      },
      2020: {
        amount: 89,
        stack: '1',
        description: ''
      },
      2021: {
        amount: 147,
        stack: '1',
        description: ''
      },
      2022: {
        amount: 212,
        stack: '1',
        description: ''
      }
    },
    fact: {
      image: 'Megaphone.png',
      header: 'DID YOU KNOW THAT',
      description:
        "The phrase 'quantum machine learning' first appeared on quant-ph in July 2013, with the paper Quantum algorithms for supervised and unsupervised machine learning.",
      placement: 2020
    }
  },
  'arxiv-quantumadvantage': {
    image: 'Quantum_speed.png',
    size: '100px',
    'base-rate': 12,
    unit: 'month',
    description:
      'How many papers that mention "quantum advantage" get published per month?',
    annual: {
      2018: {
        amount: 52,
        stack: '1',
        description: ''
      },
      2019: {
        amount: 65,
        stack: '1',
        description: ''
      },
      2020: {
        amount: 141,
        stack: '1',
        description: ''
      },
      2021: {
        amount: 216,
        stack: '1',
        description: ''
      },
      2022: {
        amount: 259,
        stack: '1',
        description: ''
      }
    },
    fact: {
      image: 'Megaphone.png',
      header: 'DID YOU KNOW THAT',
      description: 'Bread is love; bread is life 🍞',
      placement: 2020
    }
  },
  'arxiv-qaoa': {
    image: 'Paper_QAlgo.png',
    size: '100px',
    'base-rate': 12,
    unit: 'month',
    description: 'How many papers that mention "QAOA" get published per month?',
    annual: {
      2018: {
        amount: 15,
        stack: '1',
        description: ''
      },
      2019: {
        amount: 36,
        stack: '1',
        description: ''
      },
      2020: {
        amount: 62,
        stack: '1',
        description: ''
      },
      2021: {
        amount: 101,
        stack: '1',
        description: ''
      },
      2022: {
        amount: 119,
        stack: '1',
        description: ''
      }
    },
    fact: {
      image: 'Megaphone.png',
      header: 'DID YOU KNOW THAT',
      description: 'The more bread you eat, the more bread you want to eat 🍞',
      placement: 2020
    }
  },
  'arxiv-VQE': {
    image: 'Paper_QChem.png',
    size: '100px',
    'base-rate': 12,
    unit: 'month',
    description: 'How many papers that mention "VQE" get published per month?',
    annual: {
      2018: {
        amount: 12,
        stack: '1',
        description: ''
      },
      2019: {
        amount: 32,
        stack: '1',
        description: ''
      },
      2020: {
        amount: 62,
        stack: '1',
        description: ''
      },
      2021: {
        amount: 106,
        stack: '1',
        description: ''
      },
      2022: {
        amount: 103,
        stack: '1',
        description: ''
      }
    },
    fact: {
      image: 'Megaphone.png',
      header: 'DID YOU KNOW THAT',
      description: '8/10 people in Canada wish they ate more bread 🍞',
      placement: 2020
    }
  },
  'arxiv-NISQ': {
    image: 'Paper_QAlgo.png',
    size: '100px',
    'base-rate': 12,
    unit: 'month',
    description: 'How many papers that mention "NISQ" get published per month?',
    annual: {
      2018: {
        amount: 18,
        stack: '1',
        description: ''
      },
      2019: {
        amount: 72,
        stack: '1',
        description: ''
      },
      2020: {
        amount: 146,
        stack: '1',
        description: ''
      },
      2021: {
        amount: 217,
        stack: '1',
        description: ''
      },
      2022: {
        amount: 242,
        stack: '1',
        description: ''
      }
    },
    fact: {
      image: 'Megaphone.png',
      header: 'DID YOU KNOW THAT',
      description:
        "John Preskill originally proposed the name 'Messy Intermediate Length Quantum' to identify the epoch of quantum computing. It didn't stick.",
      placement: 2020
    }
  }
};

const imageRoot = '/images/';

function addFact(categoryBody, factObj) {
  var fact = document.createElement('div');
  fact.setAttribute('class', 'fact-header');
  fact.innerText = factObj['header'];

  var factImage = document.createElement('img');
  factImage.setAttribute('class', 'fact-image');
  factImage.src = '/images/' + factObj['image'];

  var factDescription = document.createElement('p');
  factDescription.setAttribute('class', 'fact-description');
  factDescription.innerText = factObj['description'];

  fact.appendChild(factImage);
  fact.appendChild(factDescription);

  categoryBody.appendChild(fact);
}

function addBelt(category, categoryObj) {
  var categoryBody;
  if (category.includes('arxiv')) {
    categoryBody = document.getElementById('arxiv-body');
  } else if (category.includes('pennylane')) {
    categoryBody = document.getElementById('pennylane-body');
  }

  var categoryDescription = document.createElement('p');
  categoryDescription.setAttribute('class', 'category-desc');
  categoryDescription.innerText = categoryObj['description'];

  categoryBody.appendChild(categoryDescription);

  for (const year in categoryObj['annual']) {
    var yearObj = categoryObj['annual'][year];
    var belt = document.createElement('div');
    belt.setAttribute('class', 'belt');

    var beltTitle = document.createElement('h3');
    var rate = yearObj['amount'] / categoryObj['base-rate'];
    var speedString = (
      yearObj['stack'] /
      (rate /
        (categoryObj['annual'][2018]['amount'] / categoryObj['base-rate']))
    ).toString(10);
    var rateString = rate.toFixed(2).toString(10);
    beltTitle.innerText =
      year.toString(10) + ' — ' + rateString + ' per ' + categoryObj['unit'];
    belt.appendChild(beltTitle);

    for (let i = 0; i < yearObj['stack']; i += 1) {
      var beltImage = document.createElement('div');
      beltImage.setAttribute('class', 'belt-img');
      beltImage.style.setProperty(
        '--path',
        'url(' + imageRoot + categoryObj['image'] + ')'
      );

      beltImage.style.setProperty('--speed', speedString + 's');
      beltImage.style.setProperty('--size', categoryObj['size']);
      belt.appendChild(beltImage);
    }

    var beltDescription = document.createElement('div');
    beltDescription.setAttribute('class', 'belt-desc');

    belt.appendChild(beltDescription);
    categoryBody.appendChild(belt);
  }

  factObj = categoryObj['fact'];
  addFact(categoryBody, factObj);
}

for (const category in data) {
  const categoryObj = data[category];
  addBelt(category, categoryObj);
}

/*
'arxiv-quantum-ph': {
  image: 'paper.png',
  size: '100px',
  description:
    'How many papers in quantum-ph get published per month (1s = 1hr)?',
  'base-rate': 12,
  unit: 'month',
  annual: {
    2018: {
      amount: 6849,
      stack: '1',
      description: ''
    },
    2019: {
      amount: 7548,
      stack: '1',
      description: ''
    },
    2020: {
      amount: 8403,
      stack: '1',
      description: ''
    },
    2021: {
      amount: 9256,
      stack: '1',
      description: ''
    },
    2022: {
      amount: 9874,
      stack: '1',
      description: ''
    }
  },
  fact: {
    1: {
      image: 'Megaphone.png',
      description: 'DID YOU KNOW THAT',
      placement: 2019
    },
    2: {
      image: 'Megaphone.png',
      description: 'DID YOU KNOW THAT',
      placement: 2021
    }
  }
}
*/
