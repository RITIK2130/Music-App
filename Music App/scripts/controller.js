window.addEventListener('load',bindevents);
function bindevents(){
    document.querySelector("#search").addEventListener('click',searchBySinger);
}

function searchBySinger(){
    let singername=document.querySelector('#singer').value;

    if(singername&&singername.length>0){
        document.querySelector('#loading').className='';
        //getsongsbysinger(singername,convert);
        const promise=getsongsbysingermodern(singername);
        promise.then(response=>{
            response.json().then(json=>{
                document.querySelector('#loading').className='hide';
           print(json['results']);
            }).catch(err=>{
                console.log("Invalid Json",err);
            })
        }).catch(err=>{
            console.log("Unable to Connect to the Server",err);
        })
    }
}
function convert(json){
    console.log("before convert".json);
    let songs=JSON.parse(json);
    console.log("After convert",songs);
    const allsongs=songs['results'];
    print(allsongs);

}

function print(allsongs){
   let outputdiv= document.querySelector('#output');
   outputdiv.innerHTML=' ';
   allsongs.forEach(song => {
       let div=document.createElement('div');
       let img=document.createElement('img');
       img.src=song['artworkUrl100'];
       div.appendChild(img);
       let audio=document.createElement('audio');
       audio.style.width="500px";
       audio.controls=true;
       audio.src=song['previewUrl'];
       div.appendChild(audio);
       outputdiv.appendChild(div);
   });
}