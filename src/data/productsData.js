export default [{
  status: "succes",
  data: [{
    collectionId: 'seprei',
    collectionName: 'Seprei',
    collections: [
      {
        id: 'a.1',
        nama: 'Seprei',
        name : 'motif doraemon' ,
        ukuran : '170 x 170',
        url: '/src/assets/product.png',
        price: 70000,
        isAvailable: false, 
        stock: 0
      },
      {
        id: 'a.2',
        nama: 'Seprei',
        name : 'motif bintang' ,
        ukuran : '200 x 170',
        url: '/src/assets/product.png',
        price: 90000,
        isAvailable: false, 
        stock: 10
      },
      {
        id: 'a.3',
        nama: 'Seprei',
        ukuran : '200 x 150',
        name : 'motif wayang' ,
        url: '/src/assets/product.png',
        price: 90000,
        isAvailable: true, 
        stock: 110
      },
    ]
  },
    {
    collectionId: 'sarungbantal',
    collectionName: 'sarung bantal',
    collections: [
      {
        id: 'b.1',
        nama: 'Sarung Bantal',
        name : 'motif anime' ,
        ukuran : 'kecil',
        url: '/src/assets/product.png',
        price: 10000,
        isAvailable: true, 
        stock: 5,
        variant: [
          {
            url : "",
            // variant by color atau by size by tipe
            byColor: 'blue', 
            byTipe: 'naruto', 
            bySize: 100 , 
            stock: 9
          },
        ]
      },
      {
        id: 'b.2',
        nama: 'Sarung Bantal',
        name : 'motif pelangi' ,
        ukuran : 'medium',
        url: '/src/assets/product.png',
        price: 10000,
        isAvailable: true, 
        stock: 5
      },
    ]
    
  }]
}]