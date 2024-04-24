
//This Data is for Small Card used in Catagory Section
export const filterData = [
    { name: "Biryani", image: require('../assets/biryani.jpeg'), id: "0" },
    { name: "Kabab", image: require('../assets/kabab.jpeg'), id: "1" },
    { name: "Zinger Burger", image: require('../assets/zinger.jpg'), id: "2" },
    { name: "Shawarma", image: require('../assets/shawrama.jpeg'), id: "3" },
    { name: "Sandwich", image: require('../assets/sandwich.jpeg'), id: "4" },
    { name: "Loaded Fries", image: require('../assets/loader_fries.jpg'), id: "5" },
    { name: "Fried Chicken", image: require('../assets/fried_chicken.jpg'), id: "6" }
]

//This Data is for Fodd Card used in Delivery Section
export const resturantsData = [
    {
        resturantsName: "Nisar Charsi Tikka", farAway: "5", businessAddress: "Model Town Lahore",
        images: "https://i.dawn.com/primary/2019/01/5c2dd06bbbe42.jpg", coordinate: { lat: -26.2423, lng: 34.523423 },
        averageReviews: 4.5, numberofReviews: 244, disscount: 50, deliveryTime: 15, collectTime: 15, foodType: "Chiken Karahi, Beef Karahi , Kabab ",
        ProductData: [
            { name: "Chicken Karahi", price: 1600 , image: "https://img.freepik.com/free-photo/grilled-meat-vegetables-cast-iron-homemade-generated-by-ai_188544-20585.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais" },
            { name: "Kabab", price: 350, image: "https://www.shutterstock.com/image-photo/grilled-lula-kebab-on-skewers-260nw-1820685599.jpg" },
            { name: "BBQ", price: 190, image: "https://t4.ftcdn.net/jpg/03/36/59/67/360_F_336596714_KYxkCzJK686f0lon80WIeHOecR3OIy5S.jpg" },
            { name: "Malai Boti", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnJLLiLQ8KB_8dHNFlvwQIkJkKebcso-De-2UAk5rJg&s" },
        ],
        id: 0
    },
    {
        resturantsName: "Arif Chatkhara", farAway: "7", businessAddress: "Androon Lahore",
        images: "https://lh5.googleusercontent.com/proxy/OqaA0apuRViIQL9-SYP73HnD4A7RZnHOHlsAWv2oPDQplNBaMusGBEwwSPpZEMo9Wls59iD7gG0ENCU4pesIuOisN9Hvx7cZuoYLQzU9pJUcDrHVoKM",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.9, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Tawa Piece, Fried Naan, Karachi",
        ProductData: [
            { name: "Tawa Piece", price: 750, image: "https://www.shutterstock.com/image-photo/spicy-chicken-tawa-piece-fry-600nw-1198801801.jpg" },
            { name: "Chicken Karahi", price: 1900 , image: "https://www.shutterstock.com/image-photo/mutton-karahi-restaurant-style-gosht-260nw-2148912765.jpg" },
            { name: "Fried Naan", price: 50, image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
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
        resturantsName: "Savour Food", farAway: "3", businessAddress: "Lakshmi Chowk Lahore",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr7Ta6USraGA9cuSjebDjLq4gAX4qOpTq6aLICqJ-aaMvrVrVjrepMVe7Xn42oejSB8M&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.1, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Desi and Fast Food + Deserts also",
        ProductData: [
            { name: "Biryani", price: 250, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0f/ca/c5/savour-foods-pulao-kabab.jpg" },
            { name: "Mutton Karahi", price: 4500 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTSZZc2xdkNF96UyzqU0w_NNPIAzhRtmSiMPdlNuGFg&s" },
            { name: "Ice Cream", price: 400 , image: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=" },
        ],
        id: 3
    },
]

//This Data is for Fodd Card used in Delivery Section

export const Promotion_Resturant_Data = [
    {
        resturantsName: "Arif Chatkhara", farAway: "7", businessAddress: "Androon Lahore",
        images: "https://lh5.googleusercontent.com/proxy/OqaA0apuRViIQL9-SYP73HnD4A7RZnHOHlsAWv2oPDQplNBaMusGBEwwSPpZEMo9Wls59iD7gG0ENCU4pesIuOisN9Hvx7cZuoYLQzU9pJUcDrHVoKM",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.9, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Tawa Piece, Fried Naan, Karachi",
        ProductData: [
            { name: "Tawa Piece", price: 750, image: "https://www.shutterstock.com/image-photo/spicy-chicken-tawa-piece-fry-600nw-1198801801.jpg" },
            { name: "Chicken Karahi", price: 1900 , image: "https://www.shutterstock.com/image-photo/mutton-karahi-restaurant-style-gosht-260nw-2148912765.jpg" },
            { name: "Fried Naan", price: 50, image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        ],
        id: 0
    },
    {
        resturantsName: "Savour Food", farAway: "3", businessAddress: "Lakshmi Chowk Lahore",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr7Ta6USraGA9cuSjebDjLq4gAX4qOpTq6aLICqJ-aaMvrVrVjrepMVe7Xn42oejSB8M&usqp=CAU",
        coordinate: { lat: -26.2423, lng: 34.523423 }, averageReviews: 4.1, numberofReviews: 244, disscount: 50, deliveryTime: 15,
        collectTime: 15, foodType: "Desi and Fast Food + Deserts also",
        ProductData: [
            { name: "Biryani", price: 250, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0f/ca/c5/savour-foods-pulao-kabab.jpg" },
            { name: "Mutton Karahi", price: 4500 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTSZZc2xdkNF96UyzqU0w_NNPIAzhRtmSiMPdlNuGFg&s" },
            { name: "Ice Cream", price: 400 , image: "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=" },
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
            { name: "Chicken Karahi", price: 1600 , image: "https://img.freepik.com/free-photo/grilled-meat-vegetables-cast-iron-homemade-generated-by-ai_188544-20585.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais" },
            { name: "Kabab", price: 350, image: "https://www.shutterstock.com/image-photo/grilled-lula-kebab-on-skewers-260nw-1820685599.jpg" },
            { name: "BBQ", price: 190, image: "https://t4.ftcdn.net/jpg/03/36/59/67/360_F_336596714_KYxkCzJK686f0lon80WIeHOecR3OIy5S.jpg" },
            { name: "Malai Boti", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnJLLiLQ8KB_8dHNFlvwQIkJkKebcso-De-2UAk5rJg&s" },
        ],
        id: 3
    },
]