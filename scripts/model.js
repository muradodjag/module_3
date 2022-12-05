export default class Model {

    convertValue = async (amount, rate1, rate2) => {
        console.log(rate1, rate2, amount)
        try {
            const response = await fetch(`https://api.exchangerate.host/latest?base=${rate1}&symbols=${rate2}`)
            const data = await response.json()
            const converted = amount * data['rates'][rate2]
            const rate = data['rates'][rate2]
            return [converted, rate]
        }
        catch (e) {
            alert('something went wrong')
            return 0
        }
    }
}