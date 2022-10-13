class ExEducation{
    constructor(){
        this.btnExperinece = document.querySelector('.btn-experience')
        this.btnEducation = document.querySelector('.btn-eductation')

        this.exepreinceCards = document.querySelectorAll('.experience-card')
        this.educationCards = document.querySelectorAll('.education-card')

        this.btnExperinece.addEventListener('click',this.showEperienceCards)
        this.btnEducation.addEventListener('click',this.showEductaionCards)
    }

    showEperienceCards = () => {

        if(this.btnEducation.classList.contains('active')){
            this.btnEducation.classList.remove('active')
        }
        
        if(!this.btnExperinece.classList.contains('active')){
            this.btnExperinece.classList.add('active')
        }

        this.exepreinceCards.forEach((ex) => {
            if(!ex.classList.contains('active')){
                ex.classList.add('active')
            }
        })

        this.educationCards.forEach((ed) => {
            if(ed.classList.contains('active')){
                ed.classList.remove('active')
            }
        })

    }

    showEductaionCards = () => {

        if(!this.btnEducation.classList.contains('active')){
            this.btnEducation.classList.add('active')
        }

        if(this.btnExperinece.classList.contains('active')){
            this.btnExperinece.classList.remove('active')
        }

        this.exepreinceCards.forEach((ex) => {
            if(ex.classList.contains('active')){
                ex.classList.remove('active')
            }
        })

        this.educationCards.forEach((ed) => {
            if(!ed.classList.contains('active')){
                ed.classList.add('active')
            }
        })

    }


}

export default ExEducation