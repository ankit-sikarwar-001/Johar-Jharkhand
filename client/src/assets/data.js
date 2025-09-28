import p1_img from "../assets/p1.jfif";
import p2_img from "../assets/p2.jfif";
import p3_img from "../assets/p3.avif";
import p4_img from "../assets/p4.jfif";
import crft1 from "../assets/jharkhandi_crafts.jpeg";
import crtf2 from "../assets/men_dress.jpeg";
import crft3 from "../assets/dress_women.jpeg";

let data_product = [
  {
    id: 1,
    name: "Jharkhandi Crafts",
    category: "women",
    image: crft1,
    new_price: 50.0,
    old_price: 80.5,
  },

  {
    id: 2,
    name: "Jharkhandi Kurtas",
    category: "men",
    image: crtf2,
    new_price: 60.0,
    old_price: 90.5,
  },
  {
    id: 3,
    name: "Jharkhandi Saree",
    category: "women",
    image: crft3,
    new_price: 75.0,
    old_price: 120.0,
  },
  {
    id: 4,
    name: "Jacket",
    category: "men",
    image: p4_img,
    new_price: 90.0,
    old_price: 140.0,
  },
];

export default data_product;
