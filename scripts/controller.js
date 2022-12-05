export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindInputAmount1(this.handleChanges)
        this.view.bindInputAmount2(this.handleChanges)
        this.view.bindClickRate1(this.handleChanges)
        this.view.bindClickRate2(this.handleChanges)
        this.handleChanges(1, 'RUB', 'USD');
    }

    handleChanges = async (amount, rate1, rate2) => {
        const converted = await this.model.convertValue(amount, rate1, rate2)
        if (this.view.from) {
            console.log(converted[0])
            if (+converted[0] % 1 === 0) {
                this.view.amount2.value = converted[0]
            }
            else {
                this.view.amount2.value = converted[0].toFixed(4)
            }
            this.view.converterText1.textContent = `1 ${rate1} = ${converted[1]} ${rate2}`
            this.view.converterText2.textContent = `1 ${rate2} = ${1 / converted[1]} ${rate1}`
        }
        else {
            console.log(converted[0])
            if (+converted[0] % 1 === 0) {
                this.view.amount1.value = converted[0]
            }
            else {
                this.view.amount1.value = converted[0].toFixed(4)
            }

            this.view.converterText2.textContent = `1 ${rate1} = ${converted[1]} ${rate2}`
            this.view.converterText1.textContent = `1 ${rate2} = ${1 / converted[1]} ${rate1}`
        }
    };

}