using System.Collections.Generic;
using System.Linq;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public int BuyerId { get; set; }
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity) 
        {
            if(Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem{Product = product, Quantity = quantity});
            }

            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);

            if(existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var itemForRemoval = Items.FirstOrDefault(item => item.ProductId == productId);

            if(itemForRemoval != null)
            {
                itemForRemoval.Quantity -= quantity;
                if(itemForRemoval.Quantity == 0) Items.Remove(itemForRemoval);
            }
        }
    }
}