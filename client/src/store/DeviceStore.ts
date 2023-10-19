import { makeAutoObservable } from 'mobx';
type Types= {
   id: number; name: string; 
}
type Brands= { id: number; name: string; }
type Devices= { id: number; name: string; price: number; rating: number; img: string; }
export default class DeviceStore {
  
  public _types: Types[]   // made public for testing
  public _brands: Brands[];   // made public for testing
  public _devices: Devices[];   // made public for testing
  public _selectedType: Types | null;   // made public for testing
  public _selectedBrand: Brands | null;   // made public for testing
  constructor() {
    this._types = [
      { id: 1, name: 'Тумбочка' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Телевизоры' },
      { id: 4, name: 'Смартфоны' },
      { id: 5, name: 'Новый тип' },
      { id: 6, name: 'Еще один новый тип' }
    ];
    
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'LG' },
      { id: 4, name: 'Xiaomi' }
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 14 pro max',
        price: 250000,
        rating: 5,
        img: 'https://phonebox.com.mt/wp-content/uploads/2022/11/0021413_iphone-14-pro-max.jpeg',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21 Ultra',
        price: 200000,
        rating: 4.5,
        img: 'https://cdn.ruf.si/wp-content/uploads/sites/832/2021/01/s21-ultra-silver.jpg',
      },
      {
        id: 3,
        name: 'Google Pixel 6 Pro',
        price: 150000,
        rating: 4.2,
        img: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
      },
      {
        id: 4,
        name: 'Google Pixel',
        price: 25000,
        rating: 3,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FRNH7L0ypAdBJOKGmf8VJAHaGd%26pid%3DApi&f=1&ipt=a712979294502c43e3867e4976d7a5008848247a1373ffc4506ca85180974152&ipo=images'


      },
      {
        id: 5,
        name: 'Iphone 14 pro max',
        price: 250000,
        rating: 5,
        img: 'https://phonebox.com.mt/wp-content/uploads/2022/11/0021413_iphone-14-pro-max.jpeg',
      },
      {
        id: 6,
        name: 'Samsung Galaxy S21 Ultra',
        price: 200000,
        rating: 4.5,
        img: 'https://cdn.ruf.si/wp-content/uploads/sites/832/2021/01/s21-ultra-silver.jpg',
      },
      {
        id: 7,
        name: 'Google Pixel 6 Pro',
        price: 150000,
        rating: 4.2,
        img: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
      },
      {
        id: 8,
        name: 'Google Pixel',
        price: 25000,
        rating: 3,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FRNH7L0ypAdBJOKGmf8VJAHaGd%26pid%3DApi&f=1&ipt=a712979294502c43e3867e4976d7a5008848247a1373ffc4506ca85180974152&ipo=images'


      },
       {
        id: 9,
        name: 'Iphone 14 pro max',
        price: 250000,
        rating: 5,
        img: 'https://phonebox.com.mt/wp-content/uploads/2022/11/0021413_iphone-14-pro-max.jpeg',
      },
      {
        id: 10,
        name: 'Samsung Galaxy S21 Ultra',
        price: 200000,
        rating: 4.5,
        img: 'https://cdn.ruf.si/wp-content/uploads/sites/832/2021/01/s21-ultra-silver.jpg',
      },
      {
        id: 11,
        name: 'Google Pixel 6 Pro',
        price: 150000,
        rating: 4.2,
        img: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Pixel-6-Pro.jpeg',
      },
      {
        id: 12,
        name: 'Google Pixel',
        price: 25000,
        rating: 3,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FRNH7L0ypAdBJOKGmf8VJAHaGd%26pid%3DApi&f=1&ipt=a712979294502c43e3867e4976d7a5008848247a1373ffc4506ca85180974152&ipo=images'


      },
    ]
    this._selectedType =  {id:NaN,name:'null'}
    this._selectedBrand = {id:NaN,name:'null'}
    makeAutoObservable(this);
  }
  getTypes(){
    return this._types
  }
  getBrands(){
    return this._brands
  }
  getDevices(){
    return this._devices
  }
  setTypes(types: Types[]){
    this._types = types
  }
  setBrands(brands:Brands[]){
    this._brands =  brands
  }
  setDevices(devices:Devices[]){
    this._devices = devices
  }
  getSelectedType(){
    return this._selectedType
  }
  setSelectedType(type: Types){
   
    this._selectedType = type
  }
  getSelectedBrand(){
    return this._selectedBrand
  }
  setSelectedBrand(brand:Brands){
    this._selectedBrand = brand
  }
}
