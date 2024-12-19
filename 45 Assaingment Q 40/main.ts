// Quistion 40
//difine the make_album function
function make_album(artist_name: string, album_titale: string, tracks?:number){
    let album:{artist:string,titale:string,tracks?:number}={
        artist:artist_name,
        titale:album_titale,
    };
    
    if( tracks !== undefined){
    album.tracks = tracks;
    
    }
    
    return album;
    }
    
    // calling three function  and creating 3 veribles with diffren value
    
    let album1 = make_album("Ahsan malik", "Album title no 1");
    let album2 = make_album("saniya", "Album title no 2");
    let album3 = make_album("sana", "Album title no 3",10);
    // printing value of our object created my function
    
    console.log(album1);
    console.log(album2);
    console.log(album3);
    