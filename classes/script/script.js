class computer{
    constructor(cpu, graphics, ram, fans){
        this.cpu = cpu;
        this.graphics = graphics;
        this.ram = ram;
        this.fans = fans;
    }

    computerStats(){
        return `This computer has ${this.cpu} processor, a ${this.graphics} card, ${this.ram} amount of ram, and ${this.fans} fans!`;
    }
}

const computer1 = new computer('ryzen 7 5600x', 'gtx 1660ti', '18gbs', '4');
document.getElementById('one').innerHTML = computer1.computerStats();

const computer2 = new computer('ryzen 5 2800', 'gtx 1080 super', '36gbs', '6');
document.getElementById('two').innerHTML = computer2.computerStats();

const computer3 = new computer('ryzen 7 7500x', 'gtx 3080ti', '36gbs', '4');
document.getElementById('three').innerHTML = computer3.computerStats();

const computer4 = new computer('ryzen 5 3500', 'gtx 3060', '8gbs', '4');
document.getElementById('four').innerHTML = computer4.computerStats();

