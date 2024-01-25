export interface ArticleData {
    imgSrc: string;
    productName: string;
    price: string;
    type: 'fruit' | 'vegetable';
    status: 'best' | 'top';
    stock: 'sale' | 'new' | 'out';
}