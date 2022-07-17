function rot13(str) {
    let result = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0; i<str.length; i++)
    {
        if(alphabet.indexOf(str[i]) != -1)
        {
            let ascii = str.charCodeAt(i);
            let cypheredAscii = 0;
            if(ascii - 13 < 65)
            {
                cypheredAscii = ascii + 13;
            }
            else 
            {
                cypheredAscii = ascii - 13; 
            }
            let cypheredWord = String.fromCharCode(cypheredAscii);
            result += cypheredWord;
        } 
        else 
        {
            result += str[i];
        }     
    }
    return result;
}
console.log(rot13("SERR !PBQR PNZC"));