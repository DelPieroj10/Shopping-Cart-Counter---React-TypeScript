interface ItemInCart {
  itemName: string;
  quantity: number|undefined;
}

const itemsInCart: ItemInCart[] = [
  {
    itemName: "Nintendo Switch 2",
    quantity: 1,
  },
  {
    itemName: "Pro Controller",
    quantity: 1,
  },
  {
    itemName: "Super Smash Bros.",
    quantity: 1,
  },
];

export default itemsInCart;
