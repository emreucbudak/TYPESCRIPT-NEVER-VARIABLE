function deneme (message:string): any {{
    throw new Error(message)
}}
// ANYDE FONKSIYONUN HICBIRSEY DONMEYECEGINI GARANTI EDERIZ HATA DÖNDÜRÜRÜZ
deneme("Hata Buldum");
