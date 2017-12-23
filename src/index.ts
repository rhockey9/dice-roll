export enum DiceType {
    Standard = 1
}

export class DiceRoll{

    private _diceType: DiceType;

    constructor(diceType: DiceType){
        this._diceType = diceType
    }

    public rollDie(): number {
        return this.getRoll();
    }
    
    public rollDice(dice_count: number): number[] {
        let rolls: number[] = []; 
        if(this._diceType == DiceType.Standard)
        {
            for(let i:number=0;i<dice_count;i++)
            {
                rolls.push(this.getRoll())
            }
        }
        return rolls;
    }
    
    public verifyDiceValue(dice_value: number): boolean  {
        let valid: boolean = false;
        if(this._diceType == DiceType.Standard)
        {
            if(dice_value >= 1 && dice_value <= 6 )
            {
                valid = true;
            }
        }
    
        return valid;
    }
    
    private getRoll(): number{
        let roll: number = 0;
        if(this._diceType == DiceType.Standard)
        {
            roll = Math.floor(Math.random() * 6) + 1
        }
    
        return roll;
    }
}
