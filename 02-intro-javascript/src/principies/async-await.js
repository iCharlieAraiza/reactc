const gif = async ()=> {
    try{
        const apikey = "eNaOTPt3KxCMPvbP1317OYZ2YCbzexFR";
        const resp = await fetch(`http://api.giphy.com/v1/stickers/random?api_key=${apikey}`);
        const data = await resp.json();
    
        const url = data.data.image_original_url;
    
        const img = document.createElement("img");
        img.src = url;
    
        document.body.append(img);
    }catch(error){
        console.log("Ups hay un error!");
    }

}