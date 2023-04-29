import coffee1 from "../assets/coffee1.svg"
import coffee2 from "../assets/coffee2.svg"
import coffee3 from "../assets/coffee3.svg"
import coffee4 from "../assets/coffee4.svg"
import coffee5 from "../assets/coffee5.svg"
import coffee6 from "../assets/coffee6.svg"
import coffee7 from "../assets/coffee7.svg"
import coffee8 from "../assets/coffee8.svg"
import coffee9 from "../assets/coffee9.svg"
import coffee10 from "../assets/coffee10.svg"
import coffee11 from "../assets/coffee11.svg"
import coffee12 from "../assets/coffee12.svg"
import coffee13 from "../assets/coffee13.svg"
import coffee14 from "../assets/coffee14.svg"
import { Coffees } from "./CoffeesContexts"

export const initialCoffees: Coffees[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    type: ["Tradicional"],
    img: coffee1,
    informationsAdditional: "O tradicional café feito com água quente e grãos moídos",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 2,
    name: "Expresso Americano",
    type: ["Tradicional"],
    img: coffee2,
    informationsAdditional: "Expresso diluído, menos intenso que o tradicional",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    type: ["Tradicional"],
    img: coffee3,
    informationsAdditional: "Café expresso tradicional com espuma cremosa",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 4,
    name: "Expresso Gelado",
    type: ["Tradicional", "gelado"],
    img: coffee4,
    informationsAdditional: "Bebida preparada com café expresso e cubos de gelo",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 5,
    name: "Café com Leite",
    type: ["Tradicional", "com leite"],
    img: coffee5,
    informationsAdditional: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 6,
    name: "Latte",
    type: ["Tradicional", "com leite"],
    img: coffee6,
    informationsAdditional: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 7,
    name: "Capuccino",
    type: ["Tradicional", "com leite"],
    img: coffee7,
    informationsAdditional: "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 8,
    name: "Macchiato",
    type: ["Tradicional", "com leite"],
    img: coffee8,
    informationsAdditional: "Café expresso misturado com um pouco de leite quente e espuma",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 9,
    name: "Mocaccino",
    type: ["Tradicional", "com leite"],
    img: coffee9,
    informationsAdditional: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 10,
    name: "Chocolate Quente",
    type: ["especial", "com leite"],
    img: coffee10,
    informationsAdditional: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 11,
    name: "Cubano",
    type: ["especial","alcoólico","gelado",],
    img: coffee11,
    informationsAdditional: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 12,
    name: "Havaiano",
    type: ["especial"],
    img: coffee12,
    informationsAdditional: "Bebida adocicada preparada com café e leite de coco",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 13,
    name: "Árabe",
    type: ["especial"],
    img: coffee13,
    informationsAdditional: "Bebida preparada com grãos de café árabe e especiarias",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
  {
    id: 14,
    name: "Irlandês",
    type: ["especial", "alcoólico"],
    img: coffee14,
    informationsAdditional: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 9.90,
    quantityBuyed: 0,
    quantityToBuy: '0',
  },
]