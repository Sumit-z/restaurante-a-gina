export const menuData = {
    starters: [
        {
            pt: { name: "Pão", desc: "Pão fresco de fabrico local" },
            en: { name: "Bread", desc: "Fresh local artisan bread" },
            price: "3.00€"
        },
        {
            pt: { name: "Azeitonas e Manteigas", desc: "Azeitonas marinadas e 2 tipos de manteiga" },
            en: { name: "Olives and Butters", desc: "Marinated olives and 2 varieties of butter" },
            price: "3.00€"
        },
        {
            pt: { name: "Ovos mexidos com farinheira", desc: "Ovos cremosos com farinheira tradicional" },
            en: { name: "Scrambled eggs with farinheira", desc: "Creamy eggs with traditional Portuguese sausage" },
            price: "6.50€"
        },
        {
            pt: { name: "Queijo com presunto e paio", desc: "Queijo regional com presunto e paio de porco preto" },
            en: { name: "Cheese with ham and pork sausage", desc: "Regional cheese with black pork ham and sausage" },
            price: "9.00€"
        },
        {
            pt: { name: "Gambas fritas com alho", desc: "Gambas selecionadas fritas em azeite e alho" },
            en: { name: "Fried prawns with garlic", desc: "Selected prawns fried in olive oil and garlic" },
            price: "15.00€"
        },
        {
            pt: { name: "Amêijoas à Bulhão Pato", desc: "Amêijoas frescas com azeite, alho e coentros" },
            en: { name: "Clams to Bulhão Pato", desc: "Fresh clams with olive oil, garlic, and coriander" },
            price: "15.00€",
            featured: true
        },
        {
            pt: { name: "Croquetes de alheira", desc: "Croquetes artesanais de alheira fritos" },
            en: { name: "Alheira croquettes", desc: "Handmade fried alheira sausage croquettes" },
            price: "7.00€"
        }
    ],
    mains: [
        // Fish
        {
            pt: { name: "Garoupa", desc: "Garoupa fresca grelhada" },
            en: { name: "Grouper", desc: "Fresh grilled grouper" },
            price: "28.00€",
            badge: "Peixe/Fish"
        },
        {
            pt: { name: "Bacalhau à Lagareiro", desc: "Bacalhau assado com batata a murro e azeite" },
            en: { name: "Lagareiro's codfish", desc: "Roasted cod with punched potatoes and olive oil" },
            price: "20.00€",
            badge: "Peixe/Fish",
            featured: true
        },
        {
            pt: { name: "Bacalhau à Minhota", desc: "Bacalhau frito com cebolada e batata frita" },
            en: { name: "Minhota's codfish", desc: "Fried cod with onions and sliced potatoes" },
            price: "20.00€",
            badge: "Peixe/Fish"
        },
        {
            pt: { name: "Polvo à Lagareiro", desc: "Polvo assado com batata a murro e azeite" },
            en: { name: "Lagareiro's octopus", desc: "Roasted octopus with punched potatoes and olive oil" },
            price: "22.00€",
            badge: "Peixe/Fish"
        },
        {
            pt: { name: "Tábua mista de peixe", desc: "Variedade de peixes frescos grelhados (servida em tábua)" },
            en: { name: "Mixed fish board", desc: "Variety of fresh grilled fish (served on a board)" },
            price: "135.00€",
            badge: "Peixe/Fish"
        },
        // Meat
        {
            pt: { name: "Frango assado", desc: "Frango suculento assado no ponto" },
            en: { name: "Roast chicken", desc: "Juicy perfectly roasted chicken" },
            price: "14.00€",
            badge: "Carne/Meat"
        },
        {
            pt: { name: "Espetada de carne", desc: "Carne selecionada em espeto tradicional" },
            en: { name: "Meat skewer", desc: "Selected meat on a traditional skewer" },
            price: "16.00€",
            badge: "Carne/Meat"
        },
        {
            pt: { name: "Bife frito à casa", desc: "Bife frito com molho especial da casa" },
            en: { name: "Fried steak (House Style)", desc: "Fried steak with special house sauce" },
            price: "17.00€",
            badge: "Carne/Meat"
        },
        {
            pt: { name: "Coelho frito ou grelhado", desc: "Coelho desossado preparado ao seu gosto" },
            en: { name: "Fried or grilled rabbit", desc: "Boneless rabbit prepared to your liking" },
            price: "15.00€",
            badge: "Carne/Meat"
        },
        // Matured Meat
        {
            pt: { name: "T-bone (aprox. 1kg)", desc: "Corte premium T-bone maturado" },
            en: { name: "T-bone (approx. 1kg)", desc: "Premium matured T-bone cut" },
            price: "70.00€",
            badge: "Maturada"
        },
        {
            pt: { name: "Tomahawk (aprox. 1kg)", desc: "Corte nobre Tomahawk maturado" },
            en: { name: "Tomahawk (approx. 1kg)", desc: "Noble matured Tomahawk cut" },
            price: "80.00€",
            badge: "Maturada"
        },
        // To Share
        {
            pt: { name: "Tábua de Viade", desc: "Alheira, entrecote, escalopes vitela, posta vitela de Montalegre e entremeada" },
            en: { name: "Viade Board", desc: "Alheira, entrecote, veal scallops, Montalegre veal and pork belly" },
            price: "95.00€",
            badge: "Partilhar"
        }
    ],
    desserts: [
        {
            pt: { name: "Sericaia alentejana", desc: "Doce tradicional do Alentejo" },
            en: { name: "Sericaia alentejana", desc: "Traditional sweet from Alentejo region" },
            price: "4.50€"
        },
        {
            pt: { name: "Mousse de manga", desc: "Mousse fresca de manga" },
            en: { name: "Mango Mousse", desc: "Fresh mango mousse" },
            price: "3.50€"
        },
        {
            pt: { name: "Mousse de Chocolate", desc: "Mousse caseira de chocolate" },
            en: { name: "Chocolate Mousse", desc: "Homemade chocolate mousse" },
            price: "3.50€"
        },
        {
            pt: { name: "Leite Creme", desc: "Leite creme queimado na hora" },
            en: { name: "Crème brûlée", desc: "Traditional custard with burnt sugar" },
            price: "3.50€"
        },
        {
            pt: { name: "Bolo de Bolacha", desc: "Bolo tradicional de bolacha Maria" },
            en: { name: "Cake Cookies", desc: "Traditional Portuguese cookie cake" },
            price: "3.50€"
        },
        {
            pt: { name: "Pudim Flan", desc: "Pudim de ovos com caramelo" },
            en: { name: "Pudim Flan", desc: "Traditional egg custard with caramel" },
            price: "3.50€"
        }
    ],
    drinks: [
        {
            pt: { name: "Vinho da Casa (750ml)", desc: "Vinho regional selecionado" },
            en: { name: "House Wine (750ml)", desc: "Selected regional wine" },
            price: "12.00€"
        },
        {
            pt: { name: "Sangria Gina", desc: "Receita familiar de sangria de frutas" },
            en: { name: "Gina Sangria", desc: "Family recipe fruit sangria" },
            price: "15.00€"
        },
        {
            pt: { name: "Cerveja Artesanal", desc: "Cerveja local de pressão" },
            en: { name: "Craft Beer", desc: "Local draft beer" },
            price: "4.50€"
        }
    ]
};
