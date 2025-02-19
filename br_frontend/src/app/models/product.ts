
export class Product{
    id:number;
    sku:string;
    imageUrl: string[]
    name:string;
    description:string;
    stockQuantity:number;
    categoryName:string;
    originalPrice:number;
    discountPercentage:number;
    category:string;
    rating:number;

    constructor(
      id:number,
      sku:string,
      imageUrl: string[],
      name:string,
      description:string,
      stockQuantity:number,
      categoryName:string,
      originalPrice:number,
      discountPercentage:number,
      category:string,
      rating:number
      ) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.originalPrice = originalPrice;
        this.discountPercentage = discountPercentage;
        this.description = description;
        this.category = category;
        this.rating = rating;
        this.sku = sku;
        this.stockQuantity = stockQuantity;
        this.categoryName = categoryName;
      }
    
    getDiscountedPrice(): number {
        return this.originalPrice - (this.originalPrice * this.discountPercentage) / 100;
      }
}