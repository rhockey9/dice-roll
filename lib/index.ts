export enum diceType {
    Standard = 1
}

export function rollDie(dice_type: diceType): number {
    return getRoll(dice_type);
}

export function rollDice(dice_type: diceType, dice_count: number): number[] {
    let rolls: number[] = []; 
    if(dice_type == diceType.Standard)
    {
        for(let i:number=0;i<dice_count;i++)
        {
            rolls.push(getRoll(dice_type))
        }
    }
    return rolls;
}

function getRoll(dice_type: diceType): number{
    let roll: number = 0;
    if(dice_type == diceType.Standard)
    {
        roll = Math.floor(Math.random() * 6) + 1
    }

    return roll;
}