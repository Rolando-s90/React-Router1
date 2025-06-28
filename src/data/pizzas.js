import mozz from "../assets/mozzarella.jpg";
import pepp from "../assets/pepperoni.jpg";
import hawa from "../assets/hawaiana.jpg";
import vege from "../assets/vegetariana.jpg";

const pizzas = [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: ["Queso mozzarella", "Salsa de tomate", "Orégano"],
    precio: 8000,
    imagen: mozz,
  },
  {
    id: 2,
    nombre: "Pepperoni",
    ingredientes: ["Queso mozzarella", "Pepperoni", "Salsa de tomate"],
    precio: 9500,
    imagen: pepp,
  },
  {
    id: 3,
    nombre: "Hawaiana",
    ingredientes: ["Queso", "Jamón", "Piña"],
    precio: 9200,
    imagen: hawa,
  },
  {
    id: 4,
    nombre: "Vegetariana",
    ingredientes: ["Pimientos", "Aceitunas", "Cebolla"],
    precio: 8500,
    imagen: vege,
  },
];

export default pizzas;
