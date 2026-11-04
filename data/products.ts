export interface Product {
  id: string
  name: string
  category: string
  tag: string
  price: string
  priceNumeric: number
  size: string
  servings: string
  image: string
  description: string
  details: string
  ingredients: string[]
  allergens: string[]
  availableOnIfood: boolean
}

export const categories = [
  'Todos os Doces',
  'Fatias de Bolo & Tortas',
  'Taças & Bombons de Copo',
  'Bolos no Pote & Vulcão',
  'Doces Especiais & Barcas',
] as const

export const products: Product[] = [
  {
    id: 'fatia-ferrero-rocher',
    name: 'Fatia Suprema Ferrero Rocher com Nutella',
    category: 'Fatias de Bolo & Tortas',
    tag: 'Mais Vendida',
    price: 'R$ 26,90',
    priceNumeric: 26.9,
    size: 'Fatia generosa aprox. 220g',
    servings: 'Individual',
    image: '/images/fatia-ferrero-rocher.webp',
    description: 'Massa 50% cacau super úmida, recheada com brigadeiro nobre, amendoim torrado in natura e Nutella pura, finalizada com calda de chocolate.',
    details:
      'A fatia mais pedida da Doce Castelo em Curitiba. Equilíbrio perfeito entre o amargor do cacau nobre e a crocância do amendoim envolto em Nutella legítima.',
    ingredients: ['Cacau 50%', 'Nutella pura', 'Brigadeiro gourmet', 'Amendoim selecionado', 'Calda de chocolate'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Amendoim', 'Contém Avelã'],
    availableOnIfood: true,
  },
  {
    id: 'fatia-kinder-bueno',
    name: 'Fatia Black Kinder Bueno Recheada',
    category: 'Fatias de Bolo & Tortas',
    tag: 'Queridinha',
    price: 'R$ 27,90',
    priceNumeric: 27.9,
    size: 'Fatia generosa aprox. 220g',
    servings: 'Individual',
    image: '/images/fatia-kinder-bueno.webp',
    description: 'Massa black intensa e macia, recheio duplo de creme Kinder Bueno com brigadeiro tradicional de panela.',
    details:
      'Camadas espessas de recheio aveludado que remetem ao clássico chocolate italiano, finalizada com pedaços crocantes de wafer Kinder.',
    ingredients: ['Massa black de cacau', 'Creme Kinder Bueno', 'Brigadeiro artesanal', 'Leite condensado moça'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Avelã'],
    availableOnIfood: true,
  },
  {
    id: 'barca-kinder-bueno',
    name: 'Barca Grandiosa de Doces Kinder Bueno',
    category: 'Doces Especiais & Barcas',
    tag: 'Para Compartilhar',
    price: 'R$ 54,90',
    priceNumeric: 54.9,
    size: '650g de puro doce',
    servings: 'Serve 2 a 3 pessoas',
    image: '/images/barca-kinder-bueno.webp',
    description: 'Barca recheada com brigadeiros de colher variados, brigadeiros gourmet enrolados à mão e barras de chocolate Kinder Bueno.',
    details:
      'A atração principal dos finais de semana. Ideal para maratonar séries ou presentear alguém especial com uma explosão de sabores nobres.',
    ingredients: ['Brigadeiro de colher 50% cacau', 'Brigadeiro de Ninho', 'Barrinhas Kinder Bueno', 'Confeitos crocantes'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Avelã'],
    availableOnIfood: true,
  },
  {
    id: 'taca-brownie-nutella',
    name: 'Taça Gourmet Brownie Cream & Nutella',
    category: 'Taças & Bombons de Copo',
    tag: 'Favorito da Casa',
    price: 'R$ 29,90',
    priceNumeric: 29.9,
    size: '267ml em vidro cristal',
    servings: 'Individual',
    image: '/images/taca-brownie-nutella.webp',
    description: 'Camadas de mousse cremosa de Leite Ninho, pedaços de brownie artesanal 50% cacau e muita Nutella pura.',
    details:
      'Servida em vidro estruturado para saborear colherada por colherada. O brownie denso e úmido contrasta com a leveza do mousse de Ninho.',
    ingredients: ['Brownie 50% cacau', 'Leite Ninho', 'Nutella pura', 'Creme de leite fresco'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Avelã', 'Contém Ovos'],
    availableOnIfood: true,
  },
  {
    id: 'taca-bombom-doce-castelo',
    name: 'Taça Bombom Doce Castelo com Morangos',
    category: 'Taças & Bombons de Copo',
    tag: 'Exclusividade',
    price: 'R$ 29,90',
    priceNumeric: 29.9,
    size: '267ml em vidro cristal',
    servings: 'Individual',
    image: '/images/taca-bombom-doce-castelo.webp',
    description: 'Morangos frescos selecionados, brigadeiro branco de colher aveludado e ganache cremosa de chocolate meio amargo.',
    details:
      'A combinação clássica mais amada de Curitiba: acidez refrescante do morango fresco com a doçura aveludada do brigadeiro da casa.',
    ingredients: ['Morangos frescos', 'Brigadeiro branco de panela', 'Ganache meio amarga', 'Cacau nobre'],
    allergens: ['Contém Lactose'],
    availableOnIfood: true,
  },
  {
    id: 'taca-doce-leite-brownie',
    name: 'Taça Docinho de Leite com Brownie Fudgy',
    category: 'Taças & Bombons de Copo',
    tag: 'Irresistível',
    price: 'R$ 29,90',
    priceNumeric: 29.9,
    size: '267ml em vidro cristal',
    servings: 'Individual',
    image: '/images/taca-doce-leite-brownie.webp',
    description: 'Cubos de brownie artesanal intercalados com doce de leite suave e creme de baunilha aerado.',
    details:
      'Doce de leite cozido no ponto certo para não ficar enjoativo, combinado com brownie de casquinha crocante e interior macio.',
    ingredients: ['Brownie artesanal', 'Doce de leite tradicional', 'Creme aerado de baunilha'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Ovos'],
    availableOnIfood: true,
  },
  {
    id: 'bombom-copo-uva',
    name: 'Bombom de Copo com Uvas Thompson & Ninho',
    category: 'Taças & Bombons de Copo',
    tag: 'Sucesso Absoluto',
    price: 'R$ 21,90',
    priceNumeric: 21.9,
    size: 'Copo 250ml',
    servings: 'Individual',
    image: '/images/bombom-copo-uva.webp',
    description: 'Uvas verdes Thompson sem sementes envoltas em brigadeiro cremoso de Leite Ninho e camada de brigadeiro 50% cacau.',
    details:
      'Uma mordida que explode sabor e frescor. As uvas selecionadas crocantes combinam com a textura lisa do brigadeiro de panela.',
    ingredients: ['Uvas Thompson verdes frescas', 'Leite condensado', 'Leite Ninho', 'Cacau 50%'],
    allergens: ['Contém Lactose'],
    availableOnIfood: true,
  },
  {
    id: 'bombom-copo-morango',
    name: 'Bombom de Copo Morangos & Ganache Nobre',
    category: 'Taças & Bombons de Copo',
    tag: 'Refrescante & Doce',
    price: 'R$ 21,90',
    priceNumeric: 21.9,
    size: 'Copo 250ml',
    servings: 'Individual',
    image: '/images/bombom-copo-morango.webp',
    description: 'Morangos frescos higienizados, brigadeiro de colher branco e cobertura densa de chocolate nobre.',
    details:
      'Ideal para quem ama sobremesas com frutas frescas e chocolate cremoso de verdade.',
    ingredients: ['Morangos selecionados', 'Brigadeiro branco artesanal', 'Chocolate blend nobre'],
    allergens: ['Contém Lactose'],
    availableOnIfood: true,
  },
  {
    id: 'morango-cravejado-especial',
    name: 'Morango Cravejado Especial com Nutella',
    category: 'Doces Especiais & Barcas',
    tag: 'Viral de Sucesso',
    price: 'R$ 24,90',
    priceNumeric: 24.9,
    size: 'Unidade generosa recheada',
    servings: 'Individual',
    image: '/images/morango-cravejado-especial.webp',
    description: 'Morango gigante fresco envolvido em brigadeiro aveludado, cravejado com confeitos nobres e banhado em Nutella.',
    details:
      'O doce que conquistou as redes sociais em Curitiba. Apresentação imponente com casca farta e recheio que derrete na boca.',
    ingredients: ['Morango graúdo fresco', 'Brigadeiro tradicional', 'Nutella pura', 'Confeitos nobres'],
    allergens: ['Contém Lactose', 'Contém Avelã'],
    availableOnIfood: true,
  },
  {
    id: 'bolo-pote-prestigio',
    name: 'Bolo no Pote Prestígio Cremoso',
    category: 'Bolos no Pote & Vulcão',
    tag: 'Clássico da Vovó',
    price: 'R$ 18,90',
    priceNumeric: 18.9,
    size: 'Pote 220ml',
    servings: 'Individual',
    image: '/images/bolo-pote-prestigio.webp',
    description: 'Massa úmida de chocolate 50% cacau, beijinho cremoso de coco ralado e brigadeiro artesanal nobre.',
    details:
      'Pote prático e bem vedado para levar para o trabalho, lanche da tarde ou presentear. Camadas equilibradas e muito molhadinhas.',
    ingredients: ['Massa 50% cacau', 'Coco fresco ralado', 'Leite de coco', 'Brigadeiro gourmet'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Ovos'],
    availableOnIfood: true,
  },
  {
    id: 'bolo-vulcao-ninho-nutella',
    name: 'Bolo Vulcão Ninho com Cascata de Nutella',
    category: 'Bolos no Pote & Vulcão',
    tag: 'Especial de Festa',
    price: 'R$ 78,00',
    priceNumeric: 78.0,
    size: 'Aprox. 1,2kg',
    servings: 'Serve 8 a 10 fatias',
    image: '/images/bolo-vulcao-ninho-nutella.webp',
    description: 'Bolo fofinho caseiro com furo central transbordando brigadeiro de Ninho e cobertura generosa de Nutella pura.',
    details:
      'Ao cortar a primeira fatia, uma avalanche de recheio cremoso escorre pelo prato. O favorito para comemorações e cafés da tarde.',
    ingredients: ['Farinha de trigo selecionada', 'Ovos frescos', 'Manteiga extra', 'Leite Ninho', 'Nutella pura'],
    allergens: ['Contém Glúten', 'Contém Lactose', 'Contém Avelã', 'Contém Ovos'],
    availableOnIfood: false,
  },
  {
    id: 'torta-banoffee-artesanal',
    name: 'Torta Banoffee Curitibana Tradicional',
    category: 'Fatias de Bolo & Tortas',
    tag: 'Tradição de Curitiba',
    price: 'R$ 65,00',
    priceNumeric: 65.0,
    size: 'Aprox. 1kg (ou fatia por R$ 19,90)',
    servings: 'Serve 6 a 8 pessoas',
    image: '/images/torta-banoffee-artesanal.webp',
    description: 'Base crocante de biscoito amanteigado, doce de leite artesanal cozido, bananas frescas em rodelas e chantilly suave com canela.',
    details:
      'Uma das sobremesas mais amadas de Curitiba, preparada no ponto clássico: chantilly leve e pouco açucarado com doce de leite equilibrado.',
    ingredients: ['Biscoito amanteigado', 'Manteiga de primeira', 'Doce de leite puro', 'Bananas frescas', 'Chantilly fresco', 'Canela em pó'],
    allergens: ['Contém Glúten', 'Contém Lactose'],
    availableOnIfood: true,
  },
]
