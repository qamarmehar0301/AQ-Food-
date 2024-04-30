
//This Data is for Small Card used in Catagory Section
export const filterData = [
    { name: "Biryani ", image: require('../assets/biryani.jpeg'), id: "0" },
    { name: "Kabab ", image: require('../assets/kabab.jpeg'), id: "1" },
    { name: "Zinger Burger ", image: require('../assets/zinger.jpg'), id: "2" },
    { name: "Shawarma ", image: require('../assets/shawrama.jpeg'), id: "3" },
    { name: "Sandwich ", image: require('../assets/sandwich.jpeg'), id: "4" },
    { name: "Loaded Fries ", image: require('../assets/loader_fries.jpg'), id: "5" },
    { name: "Fried Chicken ", image: require('../assets/fried_chicken.jpg'), id: "6" },
]

//This Data is for Fodd Card used in Delivery Section
export const resturantsData = [
    {
        resturantsName: "Nisar Charsi Tikka ", farAway: "5", businessAddress: "Model Town Lahore ",
        images: "https://i.dawn.com/primary/2019/01/5c2dd06bbbe42.jpg", coordinate: { lat: -26.2423, lng: 34.523423 },
        averageReviews: 4.5, numberofReviews: 676, disscount: 10, deliveryTime: 35, collectTime: 20, foodType: "Chiken Karahi, Beef Karahi , Kabab ",
        ProductData: [
            { name: "Chicken Karahi ", price: 1600, image: "https://img.freepik.com/free-photo/grilled-meat-vegetables-cast-iron-homemade-generated-by-ai_188544-20585.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais" },
            { name: "Kabab ", price: 350, image: "https://www.shutterstock.com/image-photo/grilled-lula-kebab-on-skewers-260nw-1820685599.jpg" },
            { name: "BBQ ", price: 190, image: "https://t4.ftcdn.net/jpg/03/36/59/67/360_F_336596714_KYxkCzJK686f0lon80WIeHOecR3OIy5S.jpg" },
            { name: "Malai Boti ", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnJLLiLQ8KB_8dHNFlvwQIkJkKebcso-De-2UAk5rJg&s" },
        ],
        id: 0
    },
    {
        resturantsName: "Arif Chatkhara ", farAway: "7", businessAddress: "Androon Lahore ",
        images: "https://lh5.googleusercontent.com/proxy/OqaA0apuRViIQL9-SYP73HnD4A7RZnHOHlsAWv2oPDQplNBaMusGBEwwSPpZEMo9Wls59iD7gG0ENCU4pesIuOisN9Hvx7cZuoYLQzU9pJUcDrHVoKM",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.9, numberofReviews: 747, disscount: 20, deliveryTime: 15,
        collectTime: 5, foodType: "Tawa Piece, Fried Naan, Karahi",
        ProductData: [
            { name: "Tawa Piece ", price: 750, image: "https://www.shutterstock.com/image-photo/spicy-chicken-tawa-piece-fry-600nw-1198801801.jpg" },
            { name: "Chicken Karahi ", price: 1900, image: "https://www.shutterstock.com/image-photo/mutton-karahi-restaurant-style-gosht-260nw-2148912765.jpg" },
            { name: "Fried Naan ", price: 50, image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        ],
        id: 1
    },
    {
        resturantsName: "Smoke & Squads ", farAway: "10", businessAddress: "Near UET Lahore ",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMk2iJO073GVIjWpYulm2S-4UoLlmLe2RCjemaKNHGRSeFCHzs_eyOgjNSAN6Hb11SS8&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.2, numberofReviews: 144, disscount: 50, deliveryTime: 45,
        collectTime: 25, foodType: "Zinger Burger, Andy wala Burger, Chiken Shawarma,Loaded Fries",
        ProductData: [
            { name: "Zinger Burger ", price: 300, image: "https://t4.ftcdn.net/jpg/05/67/61/35/360_F_567613541_rABRpKAjdD3Hyo3e3ebVEx7VHBiF5kHI.jpg" },
            { name: "Beef Burger ", price: 700, image: "https://t3.ftcdn.net/jpg/05/62/77/30/360_F_562773014_AUOqIArlxgOunTfEgK2Ncj2YfEz0qaYb.jpg" },
            { name: "Loaded Fries ", price: 600, image: "https://t4.ftcdn.net/jpg/03/67/72/79/360_F_367727961_q7z5IXobgSnTdUVZiqxSx64aH4RaRsc7.jpg" },
            { name: "Chicken Shawarma ", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qUS0kMLeo-LzCNiESL6rLXf8a-mcfBmWl4puoebHBT0vvMTagE5Nxpb0lCnpkGr0ZD4&usqp=CAU" },
            { name: "Zinger Shawarma ", price: 420, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu7Ge2cg3Sl78kuo-KtM_XSL0IhH-nOaN-RxSzIi0u8c60RIUxSYwOwTnkd3pzvkfRlU&usqp=CAU" },
            { name: "Andy Wala Burger ", price: 150, image: "https://d3o2ptabp7rtgq.cloudfront.net/bss/webp/media/catalog/product/cache/0382bfe7b144d6408e0d2797b01c42e4/b/u/burger_shami_2.webp" },
            { name: "Sandwich ", price: 220, image: "https://t3.ftcdn.net/jpg/01/11/28/82/360_F_111288255_yYufRCRFaLsxVIlaAQMWYMTJD1R4Dy02.jpg" },
        ],
        id: 2
    },
    {
        resturantsName: "Savour Foods ", farAway: "3", businessAddress: "Lakshmi Chowk Lahore ",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr7Ta6USraGA9cuSjebDjLq4gAX4qOpTq6aLICqJ-aaMvrVrVjrepMVe7Xn42oejSB8M&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.1, numberofReviews: 544, deliveryTime: 20,
        collectTime: 10, foodType: "Desi and Fast Food + Deserts also",
        ProductData: [
            { name: "Biryani ", price: 250, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0f/ca/c5/savour-foods-pulao-kabab.jpg" },
            { name: "Mutton Karahi ", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTSZZc2xdkNF96UyzqU0w_NNPIAzhRtmSiMPdlNuGFg&s" },
            { name: "Ice Cream ", price: 400, image: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=" },
        ],
        id: 3
    },
]

//This Data is for Fodd Card used in Delivery Section

export const Promotion_Resturant_Data = [
    {
        resturantsName: "Arif Chatkhara", farAway: "7", businessAddress: "Androon Lahore",
        images: "https://www.shutterstock.com/image-photo/spicy-chicken-tawa-piece-fry-600nw-1198801801.jpg",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.9, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Tawa Piece, Fried Naan, Karachi",
        ProductData: [
            { name: "Tawa Piece", price: 750, image: "https://lh5.googleusercontent.com/proxy/OqaA0apuRViIQL9-SYP73HnD4A7RZnHOHlsAWv2oPDQplNBaMusGBEwwSPpZEMo9Wls59iD7gG0ENCU4pesIuOisN9Hvx7cZuoYLQzU9pJUcDrHVoKM" },
            { name: "Chicken Karahi", price: 1900, image: "https://www.shutterstock.com/image-photo/mutton-karahi-restaurant-style-gosht-260nw-2148912765.jpg" },
            { name: "Fried Naan", price: 50, image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        ],
        id: 0
    },
    {
        resturantsName: "Savour Foods", farAway: "3", businessAddress: "Lakshmi Chowk Lahore",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr7Ta6USraGA9cuSjebDjLq4gAX4qOpTq6aLICqJ-aaMvrVrVjrepMVe7Xn42oejSB8M&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.1, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Desi and Fast Food + Deserts also",
        ProductData: [
            { name: "Biryani", price: 250, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0f/ca/c5/savour-foods-pulao-kabab.jpg" },
            { name: "Mutton Karahi", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTSZZc2xdkNF96UyzqU0w_NNPIAzhRtmSiMPdlNuGFg&s" },
            { name: "Ice Cream", price: 400, image: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=" },
        ],
        id: 1
    },
    {
        resturantsName: "Smoke & Squads", farAway: "10", businessAddress: "Near UET Lahore",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMk2iJO073GVIjWpYulm2S-4UoLlmLe2RCjemaKNHGRSeFCHzs_eyOgjNSAN6Hb11SS8&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.2, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Zinger Burger, Andy wala Burger, Chiken Shawarma,Loaded Fries",
        ProductData: [
            { name: "Zinger Burger", price: 300, image: "https://t4.ftcdn.net/jpg/05/67/61/35/360_F_567613541_rABRpKAjdD3Hyo3e3ebVEx7VHBiF5kHI.jpg" },
            { name: "Beef Burger", price: 700, image: "https://t3.ftcdn.net/jpg/05/62/77/30/360_F_562773014_AUOqIArlxgOunTfEgK2Ncj2YfEz0qaYb.jpg" },
            { name: "Loaded Fries", price: 600, image: "https://t4.ftcdn.net/jpg/03/67/72/79/360_F_367727961_q7z5IXobgSnTdUVZiqxSx64aH4RaRsc7.jpg" },
            { name: "Chicken Shawarma", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qUS0kMLeo-LzCNiESL6rLXf8a-mcfBmWl4puoebHBT0vvMTagE5Nxpb0lCnpkGr0ZD4&usqp=CAU" },
            { name: "Zinger Shawarma", price: 420, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu7Ge2cg3Sl78kuo-KtM_XSL0IhH-nOaN-RxSzIi0u8c60RIUxSYwOwTnkd3pzvkfRlU&usqp=CAU" },
            { name: "Andy Wala Burger", price: 150, image: "https://d3o2ptabp7rtgq.cloudfront.net/bss/webp/media/catalog/product/cache/0382bfe7b144d6408e0d2797b01c42e4/b/u/burger_shami_2.webp" },
            { name: "Sandwich", price: 220, image: "https://t3.ftcdn.net/jpg/01/11/28/82/360_F_111288255_yYufRCRFaLsxVIlaAQMWYMTJD1R4Dy02.jpg" },
        ],
        id: 2
    },
    {
        resturantsName: "Nisar Charsi Tikka", farAway: "5", businessAddress: "Model Town Lahore",
        images: "https://i.dawn.com/primary/2019/01/5c2dd06bbbe42.jpg", coordinate: { lat: -26.2423, lng: 34.523423 },
        averageReviews: 4.5, numberofReviews: 244, disscount: 50, deliveryTime: 15, collectTime: 15, foodType: "Chiken Karahi, Beef Karahi , Kabab ",
        ProductData: [
            { name: "Chicken Karahi", price: 1600, image: "https://img.freepik.com/free-photo/grilled-meat-vegetables-cast-iron-homemade-generated-by-ai_188544-20585.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais" },
            { name: "Kabab", price: 350, image: "https://www.shutterstock.com/image-photo/grilled-lula-kebab-on-skewers-260nw-1820685599.jpg" },
            { name: "BBQ", price: 190, image: "https://t4.ftcdn.net/jpg/03/36/59/67/360_F_336596714_KYxkCzJK686f0lon80WIeHOecR3OIy5S.jpg" },
            { name: "Malai Boti", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnJLLiLQ8KB_8dHNFlvwQIkJkKebcso-De-2UAk5rJg&s" },
        ],
        id: 3
    },
]

//Menu Data For Resturants
export const ArifChatkhara_menu= [

    { title: "Tawa Piece ", special: false, key: 0, },
    { title: "Special Tawa Biryani ", special: false, key: 1 },
    { title: "Tawa's Special ", special: false, key: 2 },
    { title: "Tawa's Shahi Dall ", special: false, key: 3 },
    { title: "Chicken Karahi ", special: false, key: 4 },
    { title: "Roogni Naan ", special: false, key: 5 },
    { title: "Special Tawa Naan ", special: false, key: 6 },
    { title: "Milkshakes ", special: false, key: 7 },
    { title: "Cold Drinks ", special: false, key: 8 },
    { title: "Desserts ", special: false, key: 9 },
    { title: "Hot Drinks ", special: false, key: 10 },

];
export const ArifChatkhara_special = [
    { title: "LIMITED OFFER ", key: 0 },
    { title: "EXTRA SPICES ", key: 1 },
    { title: "EXTRA CHILLIS ", key: 2 },
]; 

export const NisarCharsiTikka_menu = [

    { title: "Charsi Shinwari Karahi ", special: false, key: 0, },
    { title: "Charsi Sulemanni Karahi ", special: false, key: 1 },
    { title: "Charsi Namkeen Tikka ", special: false, key: 2 },
    { title: "Charsi Patta Tikka ", special: false, key: 3 },
    { title: "Charsi Gurda Kapora ", special: false, key: 4 },
    { title: "Kaabli Pulao Mutton ", special: false, key: 5 },
    { title: "Kaabli Pulao Beef ", special: false, key: 6 },
    { title: "BBQ & Malai Boti ", special: false, key: 7 },
    { title: "Fresh Salad ", special: false, key: 8 },
    { title: "Podena Zerra Raita ", special: false, key: 9 },
    { title: "Soft Drinks ", special: false, key: 10 },
    { title: "Fresh Lam ", special: false, key: 11 },
];
export const NisarCharsiTikka_special = [
    { title: "LIMITED OFFER ", key: 0 },
    { title: "Grill Fish ", key: 1 },
    { title: "Charsi gulab Jamun ", key: 2 },
    { title: "Charsi Hlawa ", key: 3 },
]; 

export const smokeNsquada_menu = [

    { title: "Zinger Burger ", special: false, key: 0, },
    { title: "Birria Burger ", special: false, key: 1 },
    { title: "Kimchi Burger  ", special: false, key: 2 },
    { title: "Beef Burger ", special: false, key: 3 },
    { title: "Mashroom Burger ", special: false, key: 4 },
    { title: "Andy Wala Burger ", special: false, key: 5 },
    { title: "Chicken Shawarma ", special: false, key: 6 },
    { title: "Zinger Shawarma ", special: false, key: 7 },
    { title: "Sandwich ", special: false, key: 8 },
    { title: "Fries ", special: false, key: 9 },
    { title: "Loaded Fries ", special: false, key: 10 },
    { title: "Soft Drinks ", special: false, key: 11 },
];
export const smokeNsquada_special = [
    { title: "LIMITED OFFER ", key: 0 },
    { title: "Go Chilli ", key: 1 },
    { title: "Go Cheese ", key: 2 },
]; 

export const SavourFoods_menu = [

    { title: "Pulao Kabab ", special: false, key: 0, },
    { title: "Pulao ", special: false, key: 1 },
    { title: "Chciken Biryani ", special: false, key: 2 },
    { title: "Krispo Burger ", special: false, key: 3 },
    { title: "Chicken Burger ", special: false, key: 4 },
    { title: "Krispo Broast ", special: false, key: 5 },
    { title: "Zarda ", special: false, key: 6 },
    { title: "Kheer ", special: false, key: 7 },
    { title: "Ice Cream", special: false, key: 8 },
    { title: "Mint Margarita ", special: false, key: 9 },
    { title: "Soft Drinks ", special: false, key: 10 },
    { title: "Qahwa ", special: false, key: 11 },
];
export const SavourFoods_special = [
    { title: "LIMITED OFFER ", key: 0 },
    { title: "Grill Fish ", key: 1 },
    { title: "Hot Shot ", key: 2 },
    { title: "Tangy Sticks ", key: 3 },
]; 


//Info Data for Resturant 
