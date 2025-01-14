
export class Product{
    id:string;
    name:string;
    imageUrl: string[]
    originalPrice:number;
    discountPercentage:number;
    description: string;
    category:string;
    rating:number;

    constructor(
        id:string,
    name:string,
    imageUrl: string[],
    originalPrice:number,
    discountPercentage:number,
    description: string,
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
      }
    
     getDiscountedPrice(): number {
        return this.originalPrice - (this.originalPrice * this.discountPercentage) / 100;
      }
}