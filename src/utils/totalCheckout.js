function totalCheckout(arrayCostItem, deliveryCost, discount){
    let totalCostItem = 0;
    const map = arrayCostItem.map(item => {
      return totalCostItem += item
    })
    return totalCostItem + deliveryCost - discount
}

export default totalCheckout