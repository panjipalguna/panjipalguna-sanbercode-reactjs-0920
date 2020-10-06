//soal satu
{
    var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
    var objectDaftarPeserta = {
        nama:"Asep",
        jenis_kelamin:"laki-laki",
        hobi:"baca buku" ,
        tahun_lahir:1992
    }
    console.log(objectDaftarPeserta)
}

//soal dua
{
    data = [
        {
            nama: "strawberry",
            warna: "merah",
            berbiji: false,
            harga: 9000 
        },
        {
            nama: "jeruk",
            warna: "oranye",
            berbiji: true,
            harga: 8000 
        },        {
            nama: "Semangka",
            warna: "Hijau & Merah",
            berbiji: true,
            harga: 10000 
        },        {
            nama: "Pisang",
            warna: "Kuning",
            berbiji: false,
            harga: 5000 
        }
    ]
    console.log(data[0])
}

//soal tiga
{
    var dataFilm = []
    dataFilm["nama"] = "Fruit Basket"
    dataFilm["durasi"] = "25 menit"
    dataFilm["genre"] = ["Slice of Life", "Comedy"," Supernatural", "Drama", "Romance", "Shoujo"]
    dataFilm["tahun"] = 2020
    console.log(dataFilm)
}

//soal empat 
//release 0

    class Animal {
        constructor(name,legs,cold_blooded) {
            this.name = name
            this.legs = legs
            this.cold_blooded = cold_blooded
        }
    }
     
    var sheep = new Animal("shaun",4,false);
     
    console.log(sheep.name) // "shaun"
    console.log(sheep.legs) // 4
    console.log(sheep.cold_blooded) // false

//release 1

    // Code class Ape dan class Frog di sini
    class Ape extends Animal{
        constructor(name) {
            super(name)
        }
        yell(){
            return console.log("Auooo")
        }
    }
    class Frog extends Animal{
        constructor(name) {
            super(name)
        }
        jump(){
            return console.log("hop hop")
        }
    }
 
    var sungokong = new Ape("kera sakti")
    sungokong.yell() // "Auooo"
    
    var kodok = new Frog("buduk")
    kodok.jump() // "hop hop" 


//soal lima
{
    class Clock {
        constructor({ template }){
            this.template = template
        }
        render(){
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        stop() {
          clearInterval(this.timer);
        };
      
        start() {
            this.render();
          this.timer = setInterval(function(){this.render()} , 1000);
        };
      
      }
      
      var clock = new Clock({template: 'h:m:s'});
      clock.start(); 
}