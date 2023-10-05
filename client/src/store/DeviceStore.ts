import { makeAutoObservable } from 'mobx';
type Types= {
   id: number; name: string; 
}
type Brands= { id: number; name: string; }
type Devices= { id: number; name: string; price: number; rating: number; img: string; }
export default class DeviceStore {
  
  private _types: Types[]
  private _brands: Brands[];
  private _devices: Devices[];
  constructor() {
    this._types = [
      {id:1,name: 'Тумбочка'},
      {id: 2,name: 'ру'}
      
    ]
    this._brands = [
      {id:1,name: 'Samsung'},
      {id:2,name: 'Apple'},
    ]
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
    ]
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
}
