function getsongsbysingermodern(singername){
    const URL=`https://itunes.apple.com/search?term=${singername}&limit=15`;
    const promise=fetch(URL);
    return promise;
}

function getsongsbysinger(singername){
    var XmlhttpRequest= new XMLHttpRequest();
    const URL=`https://itunes.apple.com/search?term=${singername}&limit=15`;
    XmlhttpRequest.onreadystatechange=function(){
        console.log("Ready State call",this.readyState);
        if(this.readyState==4&&this.status==200){
            document.querySelector('#loading').className='hide';
            console.log("Data Received",this.responseText,"Type",this.responseType);
            console.log(typeof this.responseType);
            convert(this.responseText);
        }
    }
    XmlhttpRequest.open('GET',URL,true);
    XmlhttpRequest.send(null);
    console.log("After Send");
}