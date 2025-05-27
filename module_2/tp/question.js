export class Question{

    constructor(label, answers, correctAnswer) {
        this.label = label
        this.answers = answers
        this.correctAnswer = correctAnswer
    }

    display(){

        let divLabel = document.createElement('div')
        let divAnswers = document.createElement('div')
        let divContainer = document.createElement('div')

        divLabel.innerText = this.label

        this.answers.forEach(function (val, idx){

            const input = document.createElement('input')
            input.type = 'radio'
            input.id = idx
            input.value = idx
            input.name = 'answer'

            const label = document.createElement('label')
            label.innerText = val
            label.setAttribute('for', idx)

            divAnswers.append(input)
            divAnswers.append(label)
        })

        divContainer.append(divLabel)
        divContainer.append(divAnswers)

        return divContainer
    }


}