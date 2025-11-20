export class Toolbox {

    //gets random number, 0 to array length
    getRandomIndex(array){
        return Math.floor(Math.random() * array.length)
    }




    //gets random letter from array
    getRandomItem(array){
        let randomIndex = this.getRandomIndex(array)
        return array[randomIndex];
    }



    shuffleArray(array){
        let shuffled = []
        // shuffled.push(array[0])

        let howManyTimesToPush = array.length

        for(let i=0; i<howManyTimesToPush; i++){
            let randomIndex = this.getRandomIndex(array);
            let removed = array.splice(randomIndex, 1);
            shuffled.push(removed[0]);
        }

        return shuffled
    }




    //random color rgb/hex generation
    getRandomColor() {
        let color = "#"
        let chars = [
            "0", "1", "2", "3", 
            "4", "5", "6", "7", 
            "8", "9", "a", "b", 
            "c", "d", "e", "f"];
        
            for(let i=0; i<6; i++){
                let char1 = this.getRandomItem(chars);
                color += char1;
            }
            

            return color;
    
    }

    isWithinRect(pointX, pointY, rectX, rectY, rectW, rectH){
        if(pointX > rectX + rectW){
            return false;
        } else if(pointX < rectX){
            return false;
        } else if(pointY < rectY){
            return false;
        } else if(pointY > rectY + rectH){
            return false;
        }
        else return true
    }
}