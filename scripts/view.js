export default class View {
    constructor() {
        this.amount1 = document.querySelector(".left-container  .money-input");
        this.converterText1 = document.querySelector(".left-container .converter-text")
        this.converterText2 = document.querySelector(".right-container .converter-text")
        this.amount2 = document.querySelector(".right-container .money-input");
        this.rate1 = document.querySelector('input[name="radio1"]:checked');
        this.rate2 = document.querySelector('input[name="radio2"]:checked');
        this.value1 = this.amount1.value;
        this.value2 = this.amount2.value;
        this.rateValue1 = this.rate1.value;
        this.rateValue2 = this.rate2.value;
        this.from = true;
    }

    bindInputAmount1(handler) {
        this.amount1.addEventListener('input', event => {
            event.preventDefault();
            this.value1 = event.target.value;
            this.from = true
            handler(event.target.value, this.rateValue1, this.rateValue2);
        })
    }

    bindInputAmount2(handler) {
        this.amount2.addEventListener('input', event => {
            event.preventDefault();
            this.value2 = event.target.value;
            this.from = false
            handler(event.target.value, this.rateValue2, this.rateValue1);
        })
    }
    bindClickRate1(handler) {
        document.querySelectorAll('input[name="radio1"]').forEach((el) => {
            el.addEventListener('change', event => {
                event.preventDefault();
                this.rateValue1 = event.target.value;
                console.log(this.rateValue1)
                handler(this.from ? this.value1 : this.value2, this.from ? this.rateValue1 : this.rateValue2, this.from ? this.rateValue2 : this.rateValue1)
            })
        })

    }

    bindClickRate2(handler) {
        document.querySelectorAll('input[name="radio2"]').forEach((el) => {
            el.addEventListener('change', event => {
                event.preventDefault();
                this.rateValue2 = event.target.value;
                handler(this.from ? this.value1 : this.value2, this.from ? this.rateValue1 : this.rateValue2, this.from ? this.rateValue2 : this.rateValue1)
            })
        })
    }



}