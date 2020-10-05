// one
// two
// three
// four
// five
// stitch
// seven
// eight
// nine
// ten
// eleven
// twelve
// thirteen
// fourteen
// fifteen
// sixteen
// seventeen
// eighteen
// nineteen
// twenty
// twenty one
// thirty two
// forty three
// fifty four
// sixty five
// one hundred seventy six
// one thousand one hundred seventy six
// ten thousand seven seventy six
// million one hundred one thousand seventy six

const numNames = { 
    '0' : ['zero','one','two','three','four', 'five','six','seven','eight','nine'],
    '10' : ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'],
    '20' :['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'],
    '100': ['hundred','thousand','million', 'billion','trillion']
    };


module.exports = function toReadable (number) {
    
    let n = 12;
    
    if (number == 0){
        return 'zero';
    }

    let mod = 0;
    while (mod== 0 && n > 0){
        if (n > 3){
            n = n - 3;
        }else{
            n = n - 1
        }
        mod = Math.floor(number / (10 ** n));
    }
    let ost = number - mod * (10**n)

    let res;

    if (n==0){
        return numNames['0'][mod]
    } else if (n == 1 && mod == 1) {
        return numNames['10'][ost]
    }else if (n == 1 && mod > 1) {
        res = numNames['20'][mod-2]
        if (ost > 0){ 
            return res + ' ' + toReadable(ost)
        }
        return res
    }else if (n > 1) {
        res = toReadable(mod) + ' ' + numNames['100'][Math.floor(n/3)]
        if (ost > 0){ 
            return res + ' ' + toReadable(ost)
        }
        return res
    }
       
    
    
}
