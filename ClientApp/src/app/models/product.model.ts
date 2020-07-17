import { productImage } from './productImage.model';

export class Product {
    constructor(
        public ProductName: string,
        public CategoryId: number,
        public SubCategoryId: number,
        public IsActive: boolean,
        public IsDelete: boolean,
        public CreatedDate: Date | null,
        public ModifiedDate: Date | null,
        public Description: string,
        public ProductImage: productImage | productImage[],
        public Price: number | null,
        public PriceSale: number | null,
        public IsFeatured: boolean,
        public Quantity: number,
    ) { }
}

